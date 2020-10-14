/**
 * Two Pointers问题，先排序，再从每个数开始将问题转化为两数之和问题，
 * 关键是排除重复的结果
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  const ans = []
  if (nums.length === 0) return ans

  // 小到大排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length-2; i ++ ) {
    if (i > 0 && nums[i] === nums[i-1]) continue;

    let [j, k] = [i+1, nums.length-1];
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        // 排除重复值
        while (j+1 < k-1 && nums[j] === nums[j+1] && nums[k] === nums[k-1]) {
          j++;
          k--;
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ans;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))