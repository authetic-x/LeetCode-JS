/**
 * 有个A*B*C大小的迷宫，灭霸在(A-1, B-1, C-1)的地方，还有T分钟就要回来了，
 * 你每分钟可以去一个相邻的空地方，判断能否成功逃脱？
 * 将状态抽象为(a, b, c, t)，表示你到达某个位置的最短时间，依次拓展状态，
 * 到(A-1, B-1, C-1)是判断t的大小就行了 
*/
#include <cstdio>
#include <queue>
using namespace std;

bool mark[50][50][50];
int maze[50][50][50];

struct N {
  int x, y, z, t;
};

int go[][3] = {
  1, 0, 0,
  -1, 0, 0,
  0, 1, 0,
  0, -1, 0,
  0, 0, 1,
  0, 0, -1
};

queue<N> Q;

int BFS(int a, int b, int c) {
  while (!Q.empty()) {
    N now = Q.front();
    Q.pop();
    for (int i = 0; i < 6; i ++ ) {
      int nx = now.x + go[i][0];
      int ny = now.y + go[i][1];
      int nz = now.z + go[i][2];
      if (maze[nx][ny][nz] == 1 || mark[nx][ny][nz]) continue;
      if (nx < 0 || nx >= a || ny < 0 || ny >= b || nz < 0 || nz >= c) continue;
      N tmp;
      tmp.x = nx, tmp.y = ny, tmp.z = nz, tmp.t = now.t + 1;
      if (tmp.x == a-1 && tmp.y == b-1 && tmp.z == c-1) return tmp.t;
      Q.push(tmp);
      mark[tmp.x][tmp.y][tmp.z] = true;
    }
  }
  return -1;
}

int main() {
  int T;
  scanf("%d", &T);
  while (T--) {
    int a, b, c, t;
    scanf("%d%d%d%d", &a, &b, &c, &t);
    for (int i = 0; i < a; i ++ ) {
      for (int j = 0; j < b; j ++ ) {
        for (int k = 0; k < c; k ++ ) {
          scanf("%d", maze[i][j][k]);
          mark[i][j][k] = false;
        }
      }
    }
    while (!Q.empty()) Q.pop();
    mark[0][0][0] = true;
    N tmp;
    tmp.x = 0, tmp.y = 0, tmp.z = 0, tmp.t = 0;
    Q.push(tmp);
    int res = BFS(a, b, c);
    if (res <= t) printf("%d\n", res);
    else printf("-1\n");
  }
  return 0;
}