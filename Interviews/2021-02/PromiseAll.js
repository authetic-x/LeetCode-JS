function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    try {
      const pArr = Array.from(promises)
      if (!Array.isArray(pArr)) {
        throw new Error('promises must be a array or iterator')
      }
      const resolveValues = []
      pArr.forEach(promise => {
        Promise.resolve(promise).then(res => {
          resolveValues.push(res)
          if (resolveValues.length === pArr.length) {
            resolve(resolveValues)
          }
        }).catch(err => {
          reject(err)
        })
      })
    } catch (e) {
      throw new Error(e)
    }
  })
}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

PromiseAll([p1, p2, p3])
  .then(res => console.log(res))
  .catch(e => console.log(e))
