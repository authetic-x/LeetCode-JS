/**
 * Poor version
 * @param {2^n次方} n 
 */

function quick_pow(n) {
  if (n <= 0) return 1
  if (n === 1) return 2

  const l = n / 2, r = n - l
  return quick_pow(l) * quick_pow(r)
}

/**
 * Optimal version
 * @param {基数} base 
 * @param {指数} pow 
 */

function fastPower(base, pow) {
  if (pow <= 0) return 1
  let result = 1
  while (pow > 0) {
    // pow为奇数
    if (pow & 1 === 0) {
      pow --
      result = result * base % 1000
    }
    base = base * base % 1000
    pow = pow / 2
  }
  return result
}

console.log(quick_pow(8))
console.log(fastPower(2, 8))