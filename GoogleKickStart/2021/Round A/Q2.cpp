/**
 * L Shaped Plots
 * Problem Statement:- https://codingcompetitions.withgoogle.com/kickstart/round/0000000000436140/000000000068c509
 */

#include <iostream>
#include <vector>
using namespace std;

int main() {
    int T;
    cin >> T;
    int R, C;

    for (int tc = 1; tc <= T; ++tc) {
        cin >> R >> C;
        vector<vector<int>> grid(R+2, vector<int>(C+2, 0));
        vector<vector<int>> up(R+2, vector<int>(C+2, 0));
        vector<vector<int>> down(R+2, vector<int>(C+2, 0));
        vector<vector<int>> left(R+2, vector<int>(C+2, 0));
        vector<vector<int>> right(R+2, vector<int>(C+2, 0));

        for (int i = 1; i <= R; ++i)
            for (int j = 1; j <= C; ++j) {
                cin >> grid[i][j];
                if (grid[i][j]) {
                    up[i][j] = 1 + up[i-1][j];
                    left[i][j] = 1 + left[i][j-1];
                }
            }

        for (int i = R; i >= 1; --i)
            for (int j = C; j >= 1; --j) {
                if (grid[i][j]) {
                    down[i][j] = 1 + down[i+1][j];
                    right[i][j] = 1 + right[i][j+1];
                }
            }

        int ans = 0;
        
        for (int i = 1; i <= R; ++i)
            for (int j = 1; j <= C; ++j) {
                ans += max(0, min(right[i][j], up[i][j]/2) - 1);
                ans += max(0, min(left[i][j], up[i][j]/2) - 1);
                ans += max(0, min(right[i][j], down[i][j]/2) - 1);
                ans += max(0, min(left[i][j], down[i][j]/2) - 1);
                ans += max(0, min(up[i][j], left[i][j]/2) - 1);
                ans += max(0, min(down[i][j], left[i][j]/2) - 1);
                ans += max(0, min(up[i][j], right[i][j]/2) - 1);
                ans += max(0, min(down[i][j], right[i][j]/2) - 1);
            }

        cout << "Case #" << tc << ": " << ans << endl;
    }
    return 0;
}