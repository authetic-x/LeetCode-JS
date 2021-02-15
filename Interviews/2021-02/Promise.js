class SelfPromise {
  constructor(executor) {
    this._resolveQueue = []
    this._rejectQueue = []
    this._state = 'pending'
    this._value = undefined
    let _resolve = val => {
      setTimeout(() => {
        if (this._state === 'pending') {
          this._value = val
          while (this._resolveQueue.length) {
            const fn = this._rejectQueue.shift()
            fn(val)
          }
          this._state === 'resolved'
        }
      }, 0)
    }

    let _reject = msg => {
      setTimeout(() => {
        if (this._state === 'pending') {
          this._value = msg
          while (this._resolveQueue.length) {
            const fn = this._rejectQueue.shift()
            fn(msg)
          }
          this._state = 'rejected'
        }
      }, 0)
    }

    executor(_resolve, _reject)
  }

  then(resolveFn, rejectFn) {
    return new SelfPromise((resolve, reject) => {
      typeof resolveFn !== 'function' ? resolveFn = val => val : null
      typeof rejectFn !== 'function' ? 
        rejectFn = reason => {
          throw new Error(reason instanceof Error ? reason.message : reason)
        } : null

      const fulfilledFn = (val) => {
        try {
          const res = resolveFn(val)
          res instanceof SelfPromise ? res.then(resolve) : resolve(res)
        } catch(e) {
          reject(e)
        }
      }

      const rejectedFn = (err) => {
        try {
          const res = rejectFn(err)
          res instanceof SelfPromise ? res.then(resolve) : resolve(res)
        } catch (e) {
          reject(e)
        }
      }

      switch(this._state) {
        case 'pending':
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break
        case 'resolved':
          fulfilledFn(this._value)
          break
        case 'rejected':
          rejectedFn(this._value)
          break
      }
    })
  }

  catch(fn) {
    return this.then(undefined, fn)
  }

  finally(callback) {
    return this.then(
      value => SelfPromise.resolve(callback()).then(() => value),
      reason => SelfPromise.resolve(callback()).then(() => { throw reason })
    )
  }

  static all(promises) {
    return new SelfPromise((resolve, reject) => {
      try {
        promises = Array.from(promises)
        if (!Array.isArray(promises)) 
          throw new Error('Parameter must be an array or iterator object')
        const res = []
        promises.forEach(promise => {
          SelfPromise.resolve(promise)
            .then(val => {
              res.push(val)
              if (res.length === promises.length) resolve(res)
            })
            .catch(err => {
              reject(err)
            })
        })
      } catch(e) {
        reject(e)
      }
    })
  } 

  static race(promises) {
    return new SelfPromise((resolve, reject) => {
      try {
        promises = Array.from(promises)
        if (!Array.isArray(promises)) 
          throw new Error('Parameter must be an array or iterator object')
        promises.forEach(promise => {
          SelfPromise.resolve(promise)
            .then(val => {
              resolve(val)
            })
            .catch(err => {
              reject(err)
            })
        })
      } catch(e) {
        reject(e)
      }
    })
  }

  static resolve(val) {
    return val instanceof SelfPromise ? val : new SelfPromise(resolve => resolve(val))
  }

  static reject(err) {
    return new SelfPromise((_, reject) => reject(err))
  }
}