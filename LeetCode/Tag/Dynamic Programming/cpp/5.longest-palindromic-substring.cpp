class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.length();
        vector<vector<bool>> dp (n, vector<bool> (n, false));
        
        int start, maxLen = 0;
        for (int k = 0; k < n; ++k) {
            for (int i = 0, j = k; j < n; ++i, ++j) {
                dp[i][j] = (s[i] == s[j] &&
                            (i+1 <= j-1 ? dp[i+1][j-1] : true));
                if (dp[i][j] && maxLen < j-i+1) {
                    maxLen = j-i+1;
                    start = i;
                }
            }
        }
        return s.substr(start, maxLen);
    }
};