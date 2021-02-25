function bubbleSort(arr) {
  let flag = true
  for (let i = 0; i < arr.length; i ++ ) {
    flag = true
    for (let j = 0; j < arr.length - i - 1; j ++ ) {
      if (arr[j] > arr[j+1]) {
        flag = false
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
    if (flag) return 
  }
}

function combine(arr) {
  const res = []
  function dfs(str, i) {
    if (i === arr.length) {
      res.push(str)
      return
    }
    const s = arr[i]
    for (let j = 0; j < s.length; j ++ ) {
      dfs(str+s[j], i+1)
    }
  }
  dfs('', 0)
  return res
}

async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
} 
async function async2(){
  console.log('async2')
}

console.log('script start')

setTimeout(function(){
  console.log('setTimeOut')
}, 0)

async1()

new Promise(function(resolve){
  console.log('promise1')
  resolve()
}).then(function(){
  console.log('promise2')
})

console.log('script end')
/* 
function getSomething() {
  console.log('something')
  return "something";
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v1 = await getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();

console.log('script start') */