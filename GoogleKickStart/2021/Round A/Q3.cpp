/**
 * Rabbit House
 * Problem Statement:- https://codingcompetitions.withgoogle.com/kickstart/round/0000000000436140/000000000068cb14
 */

#include <iostream>
#include <vector>
using namespace std;

#define ll long long

void fix(int i, int j, ll& ans, vector<vector<ll>>& grid, int R, int C);

int dirn[4][2] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

int main() {

    int T;
    cin >> T;
    int R, C;

    for (int tc = 1; tc <= T; ++tc) {
        cin >> R >> C;
        vector<vector<ll>> grid(R, vector<ll>(C, 0));

        for (int i = 0; i < R; ++i)
            for (int j = 0; j < C; ++j) {
                cin >> grid[i][j];
            }

        ll ans = 0;
        
        for (int r = 0; r < R; ++r)
            for (int c = 0; c < C; ++c)
                fix(r, c, ans, grid, R, C);

        cout << "Case #" << tc << ": " << ans << endl;
    }
    return 0;
}

void fix(int r, int c, ll& ans, vector<vector<ll>>& grid, int R, int C) {

    for (int i = 0; i < 4; ++i) {
        int rr = r + dirn[i][0];
        int cc = c + dirn[i][1];
        if (rr < 0 || rr >= R || cc < 0 || cc >= C) continue;

        if (grid[r][c] > grid[rr][cc] + 1) {
            ans += grid[r][c] - grid[rr][cc] - 1;
            grid[rr][cc] = grid[r][c] - 1;
            fix(rr, cc, ans, grid, R, C);
        } 
        else if (grid[rr][cc] > grid[r][c] + 1) {
            ans += grid[rr][cc] - grid[r][c] - 1;
            grid[r][c] = grid[rr][cc] - 1;
            fix(r, c, ans, grid, R, C);
        }
    }
}