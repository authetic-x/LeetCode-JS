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

function Person() {
  console.log(new.target === Person)
}

new Person()
Person()