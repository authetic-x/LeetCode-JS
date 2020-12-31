#include <stdio.h>
#include <vector>
#include <stack>
#include <map>
#include <list>
#include <unordered_map>
#include <algorithm>
#include <cmath>
using namespace std;

// 1.不用加减乘除符号做加法
int noAdd_add(int num1, int num2) {
  if (!num2) return num1;
  int sum = num1 ^ num2;
  int carry = (num1 & num2) << 1;
  return noAdd_add(sum, carry);
}

// 2. Largest Rectangle in Histogram
struct Node {
  int index;
  int height;
};

int largestRectangleArea(vector<int>& heights) {
  stack<Node> st;
  int maxArea = 0;
  for (int i = 0; i < heights.size(); i ++ ) {
    int start = i;
    while (!st.empty() && st.top().height > heights[i]) {
      Node node = st.top();
      st.pop();
      maxArea = max(maxArea, node.height * (i - node.index));
      // 移动到比当前高的地方
      start = node.index;
    }
    Node newNode;
    newNode.index = start, newNode.height = heights[i];
    st.push(newNode);
  }
  while (!st.empty()) {
    Node node = st.top();
    st.pop();
    maxArea = maxArea > node.height * (heights.size() - node.index) ? maxArea : 
      node.height * (heights.size() - node.index);
  }
  return maxArea;
}

// 3. LRU Cache
class LRUCache {
public:
  LRUCache(int capacity) : _capacity(capacity) {}
  
  int get(int key) {
    auto it = cache.find(key);
    if (it == cache.end()) return -1;
    touch(it);
    return it->second.first;
  }
  
  void put(int key, int value) {
    auto it = cache.find(key);
    if (it != cache.end()) touch(it);
    else {
      if (cache.size() == _capacity) {
        cache.erase(used.back());
        used.pop_back();
      }
      used.push_front(key);
    }
    cache[key] = { value, used.begin() };
  }
    
private:
  typedef list<int> LI;
  typedef pair<int, LI::iterator> PII;
  typedef unordered_map<int, PII> HIPII;
  
  void touch(HIPII::iterator it) {
    int key = it->first;
    used.erase(it->second.second);
    used.push_front(key);
    it->second.second = used.begin();
  }
  
  HIPII cache;
  LI used;
  int _capacity;
};

// 4.扎气球
int maxCoins(vector<int>& iNums) {
  int nums[iNums.size() + 2];
  int n = 1;
  for (int x: iNums) nums[n++] = x;
  nums[0] = nums[n++] = 1;

  vector<vector<int>> dp(n, vector<int>(n));
  for (int k = 2; k < n; k ++ ) {
    for (int left = 0; left < n - k; left ++ ) {
      int right = left + k;
      for (int i = left+1; i < right; i ++ ) {
        dp[left][right] = max(dp[left][right], 
          nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right]);
      }
    }
  }
  return dp[0][n-1];
}

int main() {
  // Test case 1:
  int res1 = noAdd_add(5, 7);
  printf("##################### Test Case1 #####################\n");
  printf("Input: 5, 7\n");
  printf("Expected: 12\n");
  printf("Output: %d\n", res1);

  // Test case 2:
  vector<int> histogram;
  histogram.push_back(2);
  histogram.push_back(1);
  histogram.push_back(5);
  histogram.push_back(6);
  histogram.push_back(2);
  histogram.push_back(3);
  int res2 = largestRectangleArea(histogram);
  printf("##################### Test Case2 #####################\n");
  printf("Input: [2, 1, 5, 6, 2, 3]\n");
  printf("Expected: 10\n");
  printf("Output: %d\n", res2);

  // Test case 3:
  LRUCache lru = LRUCache(2);
  printf("##################### Test Case3 #####################\n");
  printf("Input: put(1, 1), get(1), put(2, 2), put(3, 3), get(1), get(2)\n");
  printf("Expected: 1, -1, 2\n");
  lru.put(1, 1);
  printf("Output: %d ", lru.get(1));
  lru.put(2, 2);
  lru.put(3, 3);
  printf("%d ", lru.get(1));
  printf("%d\n", lru.get(2));

  // Test case 4:
  vector<int> iNums;
  iNums.push_back(3);
  iNums.push_back(1);
  iNums.push_back(5);
  iNums.push_back(8);
  // expect: 167 
  // nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
  // 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 167
  int res4 = maxCoins(iNums);
  printf("##################### Test Case4 #####################\n");
  printf("Input: [3, 1, 5, 8]\n");
  printf("Expected: 167\n");
  printf("Output: %d\n", res4);
  return 0;
}