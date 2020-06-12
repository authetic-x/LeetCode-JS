/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const result = []
	dfs(0, nums, result)
	return result
};

function dfs(i, nums, result) {
	if (i === nums.length-1) {
		result.push([...nums])
	}
	
	for (let j = i; j < nums.length; j ++ ) {
		[nums[i], nums[j]] = [nums[j], nums[i]]
		dfs(i+1, [...nums], result)
		nums[i], nums[j] = nums[j], nums[i]
	}
}

console.log(permute([1, 2, 3]))