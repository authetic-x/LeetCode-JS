function throttle(fn, timeout) {
  const can = true
  return function(...args) {
    if (can) {
      fn.call(this, ...args)
      can = false
      setTimeout(() => {
        can = true
      }, timeout)
    }
  }
}

function debounce(fn, timeout) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, timeout)
  }
}