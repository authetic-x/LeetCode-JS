/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	const result = []
	dfs(0, candidates, target, [], 0, result)
	return result
};

function dfs(i, can, tar, list, sum, result) {
	if (sum === tar) {
		result.push(list)
		return
	} else if (sum > tar || i >= can.length) {
		return
	}
	
	dfs(i, can, tar, [...list, can[i]], sum+can[i], result)
	dfs(i+1, can, tar, list, sum, result)
}

console.log(combinationSum([2,3,6,7], 7))