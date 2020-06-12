/**
 * @param {string} s
 * @return {number}
 */

/*
    dp[]的意义是i结尾的最优解，需要注意的是'(())'这种情况可能还需要加上前面的部分，
    比如'()(())'，所以这种情况的状态转移方程会复杂一些。
*/

var longestValidParentheses = function(s) {
    let maxans = 0;
    let dp = [];
    dp[0] = 0;
    for (let i = 1; i < s.length; i ++ ) {
        if (s[i] === '(') {
            dp[i] = 0;
        } else {
            dp[i] = 0;
            if (s[i-1] === '(') {
                dp[i] = i >= 2 ? dp[i-2] + 2 : 2;
            } else if (i-dp[i-1] > 0 && s[i-dp[i-1]-1] === '(') {
                dp[i] = dp[i-1] + (i-dp[i-1]-1 >= 2 ? dp[i-dp[i-1]-2] : 0) + 2;
            }
        }
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
};

console.log(longestValidParentheses(")()())"))