/**
 * Try every possible number at each position...
 * The backtracking starts from the back so that each search won't go too deep before it fails
 * because smaller numbers have higher chance to be divisible among themselves. 
 */

class Solution {
    int count = 0;
    
public:
    
    void solve(int n, int i, vector<bool>& used) {
        if (i == 0) {
            ++count;
            return;
        }
        for (int j = n; j > 0; --j) {
            if (!used[j] && (i % j == 0 || j % i == 0)) {
                used[j] = true;
                solve(n, i-1, used);
                used[j] = false;
            }
        }
    }

    int countArrangement(int n) {
        vector<bool> used(n+1, false);
        solve(n, n, used);
        return count;
    }
};