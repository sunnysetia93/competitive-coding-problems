class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int n = coins.size();
        vector<vector<int>> dp (n+1, vector<int>(amount+1, -1));
        for (int i = 0; i <= n; ++i) dp[i][0] = 0;
        for (int i = 1; i <= n; ++i) {
            for (int j = 1; j <= amount; ++j) {
                if (j < coins[i-1] || dp[i][j-coins[i-1]] == -1)
                    dp[i][j] = dp[i-1][j];
                else if (dp[i-1][j] == -1)
                    dp[i][j] = 1 + dp[i][j-coins[i-1]];
                else
                    dp[i][j] = min(dp[i-1][j], 1 + dp[i][j-coins[i-1]]);
            }
        }
        return dp[n][amount];
    }
};