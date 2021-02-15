Array.prototype.myMap = function(fn) {
  const arr = this 
  const res = []
  arr.forEach((item, index) => {
    res.push(fn.call(null, item, index, arr))
  })
  return res
}

Array.prototype.myFilter = function(fn) {
  const arr = this
  const res = []
  arr.forEach((item, index) => {
    const ok = fn.call(null, item, index, arr)
    if (ok) res.push(item)
  })
  return res
}

Array.prototype.myReducer = function(fn, initialValue) {
  const arr = this
  const res = initialValue ? initialValue : arr[0]
  arr.forEach((item, index) => {
    if (!initialValue) {
      initialValue = true
      return
    }
    res = fn.call(null, res, item, index, arr)
  })
  return res
}