class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int maxLen = 0, st = 0, e = 0;
        bitset<256> present;
        for ( ; e < s.length(); ++e) {
            if (!present.test(s[e]))
                present.set(s[e]);
            else {
                maxLen = max(maxLen, e-st);
                while (s[st] != s[e]) present.reset(s[st++]);
                ++st;
            }
        }
        return max(maxLen, e-st);
    }
};