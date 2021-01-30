function version_compare(v1, v2) {
  if (typeof v1 !== 'string' || typeof v2 !== 'string') {
    throw new Error('arguments must be string type')
  }

  const num1 = v1.split('.')
  const num2 = v2.split('.')

  //处理版本号长度不一致
  const len = Math.max(num1.length, num2.length)
  if (num1.length !== len) [num1, num2] = [num2, num1]
  for (let i = 0; i < len - num2.length; i ++ ) {
    num2.push('')
  }

  const zero_replace = ['0000', '000', '00', '0', '']
  for (let i = 0; i < len; i ++ ) {
    num1[i] = zero_replace[num1[i].length] + num1[i]
    num2[i] = zero_replace[num2[i].length] + num2[i]
  }

  return num1.join('-') < num2.join('-')
}

console.log(version_compare('1.2', '1.3'))
console.log(version_compare('1.2.3', '1.2.3a'))