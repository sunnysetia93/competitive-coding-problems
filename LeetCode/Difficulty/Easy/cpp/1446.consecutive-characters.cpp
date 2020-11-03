class Solution {
public:
    int maxPower(string s) {
        if (!s.length()) return 0;
        int maxP = 1, P = 1;
        for (int i = 1; i < s.length(); ++i) {
            if (s[i] == s[i-1]) {
                maxP = max(++P, maxP);
            } else {
                P = 1;
            }
        }
        return maxP;
    }
};