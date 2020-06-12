/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let left = 0, right = nums.length-1;

	while (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (nums[mid] === target) return mid
		
		// 左侧有序
		if (nums[left] <= nums[mid]) {
			if (nums[left] <= target && target <= nums[mid]) {
				right = mid-1;
			} else {
				left = mid+1;
			}
		} else {
			// 如果左侧无序则右侧一定有序
			if (target >= nums[mid] && target <= nums[right]) {
				left = mid+1;
			} else {
				right = mid-1;
			}
		}
	}

	return -1;
};

console.log(search([5,1,3], 5))