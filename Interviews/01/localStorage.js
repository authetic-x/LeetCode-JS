const ls = {
  get(key) {
    const v = JSON.parse(localStorage.getItem(key))
    if (!v) return undefined
    const { value, expire } = v;
    if (value && (expire < Date.now() || !expire)) {
      return value
    }
    return undefined
  },
  set(key, value, expire) {
    const wrappedValue = {
      value
    }
    if (expire) {
      wrappedValue.expire = Date.now() + expire
    }
    localStorage.setItem(key, JSON.stringify(wrappedValue))
  }
}