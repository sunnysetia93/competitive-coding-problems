class Solution {
    int M, N;

    // BFS
    bool isPathPossible(vector<vector<int>>& hts, int k) {
        int dirn[4][2] = {{0, -1}, {-1, 0}, {0, 1}, {1, 0}};
        vector<vector<bool>> visited (M, vector<bool>(N, false));

        queue<pair<int, int>> q;
        q.push({0, 0});
        visited[0][0] = true;
        while(!q.empty()) {
            int qsize = q.size();
            for (int i = 0; i < qsize; ++i) {
                int r = q.front().first, c = q.front().second;
                q.pop();

                for (int j = 0; j < 4; ++j) {
                    int rr = r + dirn[j][0];
                    int cc = c + dirn[j][1];
                    if (rr < 0 || rr >= M || cc < 0 || cc >= N
                        || visited[rr][cc]
                        || abs(hts[r][c] - hts[rr][cc]) > k) continue;
                    
                    if (rr == M-1 && cc == N-1) return true;

                    q.push({rr, cc});
                    visited[rr][cc] = true;
                }
            }
        }
        return false;
    }
    
public:
    int minimumEffortPath(vector<vector<int>>& hts) {
        M = hts.size();
        N = hts[0].size();
        if (M == 1 && N == 1) return 0;

        // find the min and max efforts possible
        int minEffort = 1e6, maxEffort = 0;
        for (int i = 0; i < M; ++i) {
            for (int j = 0; j < N; ++j) {
                minEffort = min(minEffort, min(i > 0 ? abs(hts[i-1][j] - hts[i][j]) : INT_MAX,
                                               j > 0 ? abs(hts[i][j-1] - hts[i][j]) : INT_MAX));
                maxEffort = max(maxEffort, max(i > 0 ? abs(hts[i-1][j] - hts[i][j]) : -1,
                                               j > 0 ? abs(hts[i][j-1] - hts[i][j]) : -1));
            }
        }

        // binary search between min and max effort
        // to find the least effort required to reach the destination
        int l = minEffort-1, r = maxEffort+1, m;
        while (r-l > 1) {
            m = l + (r-l)/2;
            if (isPathPossible(hts, m))
                r = m;
            else
                l = m;
        }
        return r;
    }
};