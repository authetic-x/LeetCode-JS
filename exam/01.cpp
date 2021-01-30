#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main() {
  string str;
  cin >> str;

  stack<char> st;
  for (int i = 0; i < str.length(); i ++ ) {
    if (st.empty()) {
      st.push(str[i]);
    } else {
      if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
        st.push(str[i]);
      } else if (str[i] == ']' || str[i] == '}' || str[i] == ')') {
        char t_char = st.top();
        st.pop();
        if (t_char != str[i]) {
          cout << "False";
          return 0;
        }
      } else {
        cout << "False";
        return 0;
      }
    }
  }

  if (!st.empty()) cout << "False";
  else cout << "True";
  
  return 0;
}