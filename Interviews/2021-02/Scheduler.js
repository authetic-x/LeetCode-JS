class Scheduler {
  constructor({ maxCount }) {
    this.queue = []
    this.maxCount = maxCount || 2
    this.runCount = 0
  }

  add(promiseCreator) {
    this.queue.push(promiseCreator)
  }

  request() {
    if (this.runCount === this.maxCount || !this.queue.length) return

    const promiseCreator = this.queue.shift()
    promiseCreator().then(() => {
      this.runCount--
      this.request()
    })
    this.runCount++
  }

  start() {
    for (let i = 0; i < this.maxCount; i ++ ) {
      this.request()
    }
  }
}