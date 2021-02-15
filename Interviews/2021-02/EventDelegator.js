function delegate(el, eventType, selector, fn) {
  el.addEventListner(eventType, (...args) => {
    let element = e.target
    while (!element.matches(selector)) {
      if (el === element) {
        element = null
        break
      }
      element = element.parentNode
    }
    element && fn.call(element, ...args)
  })
  return el
}

function event_delegator(el, type, sel, fn) {
  el.addEventListner(type, (e, ...args) => {
    let element = e.target
    while (element && !element.matches(sel)) {
      if (element === el) {
        element = null
        break
      }
      element = element.parentNode
    }
    element && fn.call(null, e, ...args)
  })
}