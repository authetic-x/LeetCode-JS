/**
 * 有个n*m大小的油田，每个点被视为油田的一个块，块与周围相邻的八个块可组成一个deposit,
 * 求油田中有多少个deposit
 * 方法类似于判断图有多少个连通集
 */
#include <cstdio>

int maze[101][101];
bool mark[101][101];
int go[][2] = {
  1, 0,
  -1, 0,
  0, 1,
  0, -1,
  -1, -1,
  -1, 1,
  1, -1,
  1, 1
};

int n, m;

void DFS(int x, int y) {
  for (int i = 0; i < 8; i ++ ) {
    int nx = x + go[i][0];
    int ny = y + go[i][1];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (maze[nx][ny] == '*' || mark[nx][ny]) continue;
    mark[nx][ny] = true;
    DFS(nx, ny);
  }
}

int main() {
  // input
  int ans = 0;
  for (int i = 0; i < n; i ++ ) {
    for (int j = 0; j < m; j ++ ) {
      if (maze[i][j] == '@' && !mark[i][j]) {
        ans++;
        mark[i][j] = true;
        DFS(i, j);
      }
    }
  }
  return 0;
}