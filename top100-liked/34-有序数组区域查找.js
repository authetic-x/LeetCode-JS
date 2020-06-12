/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
		let l_ans = -1, r_ans = -1;
		let l = 0, r = nums.length-1;

		while (l <= r) {
			let mid = Math.floor((l + r) / 2);
			if (nums[mid] === target) {
				l_ans = mid;
				while (nums[l_ans] === nums[mid] && l_ans >= 0) l_ans--;
				r_ans = mid;
				while (nums[r_ans] === nums[mid] && r_ans < nums.length) r_ans++;
				return [l_ans+1, r_ans-1];
			}

			if (target < nums[mid]) {
				r = mid-1;
			} else {
				l = mid+1;
			}
		}

		return [l_ans, r_ans];
};