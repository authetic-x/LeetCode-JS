/**
 * @param {number} n
 * @return {string[]}
 */

function dfs(n, s, l, r, ans) {
    if (s.length === n*2) {
        ans.push(s);
        return;
    }

    if (r < l) dfs(n, s+')', l, r+1, ans);
    if (l < n) dfs(n, s+'(', l+1, r, ans);
}

var generateParenthesis = function(n) {
    let ans = [];
    dfs(n, '', 0, 0, ans);

    return ans;
};

console.log(generateParenthesis(3));