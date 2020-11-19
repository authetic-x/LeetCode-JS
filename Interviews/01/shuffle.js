// return [0, max) + bias
function getRandomInt(max, bias) {
  return Math.floor(Math.random() * Math.floor(max)) + bias;
}

function swap(a1, a2) {
  var tmp = a1;
  a1 = a2;
  a2 = tmp;
}

function shuffle(a) {
  var len = a.length;
  for (var i = 0; i < len; i++) {
    var rInt = getRandomInt(len - i, i)
    // 这是重新声明变量，不要瞎用
    // [a[i], a[rInt]] = [a[rInt], a[i]]
    const tmp = a[i]
    a[i] = a[rInt]
    a[rInt] = tmp
  }
  return a;
}

// 扑克牌问题
function pokerQuestion(a) {
  const originSeq = a.map(i => ({
    index: i,
    value: -1
  }))

  let onDesk = true
  let deskSeq = []
  while (originSeq.length) {
    const topPoker = originSeq.splice(0, 1)[0]
    if (onDesk) {
      deskSeq.push(topPoker)
    } else {
      originSeq.push(topPoker)
    }
    onDesk = !onDesk
  }

  for (let i = 1; i <= deskSeq.length; i ++ ) {
    deskSeq[i-1].value = i
  }

  deskSeq = deskSeq.sort((a, b) => a.index - b.index)
  console.log(deskSeq)
  const res = deskSeq.map(poker => poker.value)
  return res
}

const a = []
for (let i = 1; i <= 13; i ++ ) {
  a.push(i)
}

console.log(pokerQuestion(a))