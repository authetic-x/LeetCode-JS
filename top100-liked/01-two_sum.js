/**
 * Desc: 给定一个数组和一个目标值，找出数组中两元素相加和等于target的对应元素下标
 * 
 * Solution: 用hash记录元素值与下标
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i ++ ) {
      let complement = target - nums[i]
      if (map.has(complement)) {
          return [map.get(complement), i]
      } else {
          map.set(nums[i], i)
      }
  }
};

function twoSum(nums, target) {
  const hash = new Map()
  nums.forEach((num, i)=> {
    if (hash.has(target - num)) {
      return [hash.get(target - num), i]
    } else {
      hash.set(num, i)
    }
  })
}