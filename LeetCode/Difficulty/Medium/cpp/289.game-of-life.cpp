/**
 * Explanation: https://leetcode.com/problems/game-of-life/discuss/73223/Easiest-JAVA-solution-with-explanation
 */
class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        vector<vector<int>> dirn = {{-1, -1}, {-1, 0}, {-1, 1}, {0, 1},
                                    {1, 1}, {1, 0}, {1, -1}, {0, -1}};
        int m = board.size(), n = board[0].size();
        for (int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                int nAliveNeighbours = 0;
                for (auto& d : dirn) {
                    int rr = i + d[0];
                    int cc = j + d[1];
                    if (rr < 0 || rr >= m || cc < 0 || cc >= n) continue;
                    
                    nAliveNeighbours += board[rr][cc] & 1;
                }
                if (nAliveNeighbours == 3 ||
                    (nAliveNeighbours == 2 && board[i][j]))
                    board[i][j] |= 2;
            }
        }

        for (int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j)
                board[i][j] >>= 1;
    }
};