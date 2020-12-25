/**
 * dp[i][j] = s1[i] === s2[j] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1])
 * res = max(res, dp[i][j])
 */