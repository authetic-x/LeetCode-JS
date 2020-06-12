/**
 * @param {number[]} height
 * @return {number}
 */

/*
    Two Pointer类问题，从两侧开始收缩，每次都移动高度较小的那一侧
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