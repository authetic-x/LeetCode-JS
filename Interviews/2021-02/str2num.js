function str2num(s) {
  if (Number.isNaN(Number(s))) throw new Error('s must be a number str')

  return Number.parseFloat(s).toFixed(2)
}

console.log(str2num('123.457776'))
console.log(str2num('ssss2'))