/* const readline = require('readline')

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let lines = []
r1.on('line', line => {
  if (lines.length == 1) {
    const l1 = lines[0]
    const l2 = line
    lines = []
    console.log(parseInt(l1) + parseInt(l2))
  } else {
    lines.push(line)
  }
}) */

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input = ''
let input_array

process.stdin.on('data', data => {
  input += data
})

process.stdin.on('end', () => {
  input_array = input.split('\n')
})

process.stdin.on('SIGINT', () => {
  console.log(input_array)
  process.exit(0)
})