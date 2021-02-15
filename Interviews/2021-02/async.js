async function f1() {
  await console.log(1)
  await console.log(6)
  console.log(2)
}

setTimeout(() => {
  console.log(5)
}, 0)

Promise.resolve().then(() => console.log(4))

console.log(3)

f1()