/*
    经典的最长回文子串。有两种基本思路：
    1. 从0开始向两边展开，(i, i)和(i, i+1)
    2. 动态规划。dp[i][j] = dp[i+1][j-1] && s[i] == s[j] ? true : false
*/

/**
 * @param {string} s
 * @return {string}
 */
function expandAround(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  return j - i - 1;
}

var longestPalindrome = function(s) {
  let start = 0, end = -1;
  for (let i = 0; i < s.length; i ++ ) {
    let len1 = expandAround(s, i, i);
    let len2 = expandAround(s, i, i+1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
        start = i - Math.floor((len-1) / 2);
        end = i + Math.floor(len / 2);
    }
  }
  console.log(start, end)
  return s.substring(start, end+1);
};

// dp version
var longestPalindrome2 = function(s) {
  if (!s || !s.length) return 0
  let dp = new Array(s.length)
  for (let i = 0; i < dp.length; i ++ ) {
    dp[i] = new Array(s.length)
    dp[i][i] = true
  }
  let ans = 1;
  for (let i = 0; i <= s.length - 2; i ++ ) {
    if (s[i] === s[i+1]) {
      dp[i][i+1] = true
      ans = 2
    }
    else dp[i][i+1] = false
  }
  for (let k = 3; k <= s.length; k ++ ) {
    for (let i = 0; i <= s.length - k; i ++ ) {
      let j = i + k - 1
      dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
      if (dp[i][j]) {
        ans = k
      }
    }
  }
  return ans
}

console.log(longestPalindrome2('abccba'))