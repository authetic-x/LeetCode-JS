/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];

    for (let v of s) {
        if (v === '{' || v === '[' || v === '(') {
            st.push(v);
        } else {
            if (st.length === 0) return false;
            if ((v === '}' && st[st.length-1] !== '{')
                || (v === ']' && st[st.length-1] !== '[')
                || (v === ')' && st[st.length-1] !== '(')) {
                return false;
            }
            st.pop();
        }
    }
    if (st.length !== 0) return false;
    return true
};

console.log(isValid('[]'))