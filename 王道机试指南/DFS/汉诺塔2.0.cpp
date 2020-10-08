/**
 * 所有盘子不能直接从第一个盘子移到第三个盘子，反之亦然。必须经过第二个盘子
 * F(n) = 3*F(n-1)+2
 */

#include <cstdio>

int ans[22];
bool hash[22];
int n;

void DFS(int num) {
  if (num > 1) {
    // isPrime(ans[num], ans[num-1])
  }
  if (num == n) {
    // judge isPrime(ans[num], ans[1])
  }
  for (int i = 2; i <= n; i ++ ) {
    if (!hash[i]) {
      hash[i] = true;
      ans[num+1] = i;
      DFS(num+1);
      hash[i] = false;
    }
  }
}

int main() {
  // input
  DFS(1);
  return 0;
}