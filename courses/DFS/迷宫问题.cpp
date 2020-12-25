/**
 *  有个N*M大小的迷宫，你在S处，出口在D处，迷宫出口只在T秒时开放，你每秒钟可以
 *  去相邻的四个空块，不能回到原来的地方，问：你是否有可能逃脱？
 *  这是一个有或没有的问题，不像灭霸那个迷宫问题在某个限制时间内即可逃脱，由于
 *  需要刚好在T秒出现在D出口，因此我们需要尝试所有的路径可能性
 */

#include <cstdio>

int maze[8][8];
int n, m, t;
bool suc = false;
int go[][2] = {
  0, -1,
  0, 1,
  1, 0,
  -1, 0
};


void DFS(int x, int y, int time) {
  if (maze[x][y] == 'D' && time == t) {
    suc = true;
    return;
  }
  for (int i = 0; i < 4; i ++ ) {
    if (suc) return;
    int nx = x + go[i][0];
    int ny = y + go[i][1];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) return;
    if (maze[nx][ny] == 'X') return;
    maze[nx][ny] = 'X';
    DFS(nx, ny, time+1);
    maze[nx][ny] = '.';
  }
}

int main() {
  // input
  // 判断起点和终点的奇偶关系可做适当优化
  // DFS(i, j, 0);
}