class PromiseScheduler {
  constructor(limit) {
    this._limit = limit
    this._running = 0
    this._queue = []
  }
  push(fn) {
    this._queue.push(fn)
  }
  request() {
    if (this._running < this._limit && this._queue.length) {
      const promiseFn = this._queue.shift()
      promiseFn().then(() => {
        console.log('finished')
        this._running--
        this.request()
      })
      this._running++
    }
  }
  start() {
    for (let i = 0; i < this._limit && i < this._queue.length; i ++ ) {
      this.request()
    }
  }
}

function f1() {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 2000)
})
}

function f2() {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 2000)
})
}

const scheduler = new PromiseScheduler(1)

scheduler.push(f1)
scheduler.push(f2)

scheduler.start()


