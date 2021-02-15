/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */

// [[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],3
function LRU(operators, k) {
  const store = Object.create({})
  const size = k
  const queue = []
  const res = []
  
  function updateQueue(queue, key) {
    const index = queue.findIndex(v => v === key)
    const val = queue.splice(index, 1)[0]
    queue.unshift(val)
  }
  
  operators.forEach(item => {
    if (item[0] === 1) {
      const key = item[1], value = item[2]
      if (store.hasOwnProperty(key)) {
        updateQueue(queue, key)
      } else {
        if (queue.length === size) {
          const delKey = queue.splice(queue.length-1, 1)[0]
          delete store[delKey]
        }
        queue.unshift(key)
      }
      store[key] = value
    } else {
      const key = item[1]
      if (store.hasOwnProperty(key)) {
        res.push(store[key])
        updateQueue(queue, key)
      } else {
        res.push(-1)
      }
    }
  })
  
  return res
}

module.exports = {
  LRU : LRU
};