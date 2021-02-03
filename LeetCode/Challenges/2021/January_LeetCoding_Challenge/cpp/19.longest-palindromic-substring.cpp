class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.length();
        int start = 0;
        int maxLen = 1;
        for (int i = 0; i < n-1; ++i) {
            int j = i;
            int k = i;
            while (k+1 < n && s[i] == s[k+1]) {
                ++k;
            }
            while (j > 0 && k < n-1 && s[j-1] == s[k+1]) {
                --j;
                ++k;
            }
            if (maxLen < k-j+1) {
                maxLen = k-j+1;
                start = j;
            }
        }
        return s.substr(start, maxLen);
    }
};