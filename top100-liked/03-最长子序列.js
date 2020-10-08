/**
 * Desc: 给出一段字符串，找出字符串中最长无重复字符的子序列
 * 
 * Solution: 滑动窗口。i~j表示不重复的子序列，用hash保存出现过的字符的位置。
 * 需要注意i的赋值语句和边界情况
 */

/*
    一道经典的滑动窗口，i~j保存不重复的最长子序列。
    当s[j]出现在i, j-1中时，更新i的位置和字符s[j]
    的下标，同时记录最大值。
    比较巧妙的是使用map记录不重复字符的方式
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let ans = 0, i = 0
    for (let j = 0; j < s.length; j ++ ) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]))
        }
        ans = Math.max(ans, j - i + 1)
        map.set(s[j], j + 1)
    }
    return ans
};

const lengthOfLongestSubstring = function(s) {
  const hash = new Map()
  let i = 0, j = 0, max_ans = 0;
  while (j < s.length) {
    if (hash.has(s[j])) {
      // 这一行很容易写错
      i = Math.max(i, hash.get(s[j]) + 1)
    }
    max_ans = Math.max(max_ans, j - i + 1) 
    hash.set(s[j], j)
    j ++
  }
  return max_ans
}