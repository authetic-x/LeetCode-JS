/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arr = new Array(numRows)
  for (let i = 0; i < numRows; i ++ ) {
    arr[i] = []
  }
  let i = 0, flag = true, delta = 1
  while (i < s.length) {
    // 当前奇数列
    if (flag) {
      let j = i+numRows > s.length ? s.length : i + numRows
      let str = s.slice(i, j)
      for (let k = 0; k < numRows; k ++ ) {
        arr[k].push(str[k] ? str[k] : '')
      }
    } else {
      
    }
  }
};