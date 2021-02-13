class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        if (grid[0][0] == 1) return -1;

        int n = grid.size();
        if (n == 1) return 1;
        
        queue<tuple<int, int>> q;
        q.push({0, 0});
        grid[0][0] = -1;
        int pathLen = 1, r, c;
        int dirn[8][2] = {{-1,-1}, {-1,0}, {-1,1}, {0,1},
                          {1,1}, {1,0}, {1,-1}, {0,-1}};
        while (!q.empty()) {
            ++pathLen;
            int qsize = q.size();
            while (qsize--) {
                tie(r, c) = q.front(); q.pop();

                for (int i = 0; i < 8; ++i) {
                    int rr = r + dirn[i][0];
                    int cc = c + dirn[i][1];
                    if (rr < 0 || rr == n || cc < 0 || cc == n || grid[rr][cc] != 0)
                        continue;
                    if (rr == n-1 && cc == n-1)
                        return pathLen;
                    q.push({rr, cc});
                    grid[rr][cc] = -1;
                }
            }
        }
        return -1;
    }
};