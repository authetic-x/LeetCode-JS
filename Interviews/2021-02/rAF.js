
let deg = 0

const div = document.getElementById('wrapper')

div.addEventListener('click', (e) => {
  const el = e.currentTarget
  requestAnimationFrame(function change() {
    el.style.transform = `rotate(${deg++}deg)`
    if (deg < 360) {
      requestAnimationFrame(change)
    }
  })
})

div.addEventListener('click', (e) => {
  const el = e.currentTarget
  const deg = 0
  requestAnimationFrame(function rotate() {
    el.style.transform = `rotate(${deg++}deg)`
    if (deg < 360) {
      requestAnimationFrame(rotate)
    }    
  })
})

function throttle(fn) {
  const canRun = true
  return function(...args) {
    if (canRun) {
      canRun = false
      requestAnimationFrame(() => {
        fn.call(this, ...args)
        canRun = true
      })
    }
  }
}

const total = 10000
const size = 100
let done = 0
const ul = document.getElementById('list')

function addItems() {
  let li = null
  const fg = document.createDocumentFragment()
  for (let i = 0; i < size; i ++ ) {
    li = document.createElement('li')
    li.innerText = `item-${done * size + i}`
  }
  ul.appendChild(fg)
  done++

  if (done < total / size) {
    requestAnimationFrame(addItems)
  }
}

requestAnimationFrame(addItems)