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