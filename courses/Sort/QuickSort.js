function partion(a, l, r) {
  if (l <= r) {
    const tmp = a[l]
    while (l < r) {
      while (l < r && a[r] > tmp) {
        r --
      }
      if (l < r) {
        a[l++] = a[r]
      }
      while (l < r && a[l] <= tmp) {
        l ++
      }
      if (l < r) {
        a[r--] = a[l]
      }
    }
    a[l] = tmp
    return l
  }
  return -1
}

function quick_sort(a, l, r) {
  if (l < r) {
    const m = partion(a, l, r)
    quick_sort(a, l, m-1)
    quick_sort(a, m+1, r)
  }
}

const a = [3, 4, 5, 1, 7, 9, 2]
quick_sort(a, 0, 6)
console.log(a)