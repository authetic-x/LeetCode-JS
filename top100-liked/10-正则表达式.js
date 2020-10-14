/**
 * 判断包含'.'和'*'的正则表达式是否匹配字符串
 * 解题思路：首先要知道递归的终点是模式串为空，其此每次匹配可分两种情况：
 * 当前匹配包含'*'或不包含，包含即跳过或不跳过两种情况，不包含直接前进匹配即可
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // 当模式串为空时判断结束
  if (p.length === 0) return s.length === 0;

  let firstMatch = s.length !== 0 && (s[0] === p[0] || p[0] === '.');
  // 两种情况：带*或者不带*
  if (p.length >= 2 && p[1] === '*') {
    // 带*的两种情况：跳过或者不跳过，不跳过的情况注意不要遗漏firstMatch
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};