class Solution {
public:
    int longestSubstring(string s, int k) {
        if (!s.length() || k > s.length()) return 0;
        unordered_map<char, int> freq;
        for (char ch : s) ++freq[ch];               // calculate frequencies of each ch in the string

        int i = 0;
        for (; i < s.length() && freq[s[i]] >= k; ++i);
        if (i == s.length()) return s.length();     // all characters have frequency >= k, found valid substring

        int len1 = longestSubstring(s.substr(0, i), k);     // find longest valid substring in s[0:i-1]

        for (; i < s.length() && freq[s[i]] < k; ++i);
        int len2 = longestSubstring(s.substr(i), k);        // find longest valid substring in s[i:]

        return max(len1, len2);
    }
};