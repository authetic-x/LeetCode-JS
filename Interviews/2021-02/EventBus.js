class EventBus {
  constructor(maxLimit) {
    this._cache = {}
    this._limit = maxLimit || 20
  }

  on(type, fn) {
    if (typeof fn !== 'function') throw new Error('fn must be a function type')
    if (this._cache.hasOwnProperty(type)) {
      this._cache[type] = this._cache[type].concat(fn)
    } else {
      this._cache[type] = [fn]
    }
  }

  emit(type, ...args) {
    if (this._cache.hasOwnProperty(type)) {
      const callbakcs = this._cache[type]
      callbakcs.forEach(fn => fn.call(this, ...args))
    }
  }

  off(type) {
    if (this._cache.hasOwnProperty(type)) {
      delete this._cache[type]
    }
  }
}