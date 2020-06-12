/**
 * @param {string} digits
 * @return {string[]}
 */
var numbers = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

function dfs(i, digits, str, ans) {
    if (i === digits.length) {
        ans.push(str);
        return;
    }

    let s = numbers[digits[i]]
    for (let j = 0; j < s.length; j ++ ) {
        dfs(i+1, digits, str+s[j], ans);
    }
}

var letterCombinations = function(digits) {
    const ans = []
    if (digits.length === 0) return ans;

    dfs(0, digits, '', ans);

    return ans;
};

console.log(letterCombinations('23'))