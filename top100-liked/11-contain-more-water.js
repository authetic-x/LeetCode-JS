/**
 * 给出一个柱形图，抽象为水桶，求出装水体积最大的区域
 * Two Pointer类问题，从两侧开始收缩，每次都移动高度较小的那一侧
 * 木桶效应，决定体积的永远是短板，所以每次优先提升短板
 */

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  let ans = 0, l = 0, r = height.length - 1;
  while (l < r) {
    ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return ans;
};