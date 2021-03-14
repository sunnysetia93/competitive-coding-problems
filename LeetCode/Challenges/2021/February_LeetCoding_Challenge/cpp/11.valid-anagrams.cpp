class Solution {
public:
    bool isAnagram(string s, string t) {
        int freq[256] = {0};
        for (char ch : s) ++freq[ch];
        for (char ch : t) --freq[ch];
        for (int f : freq) if (f != 0) return false;
        return true;
    }
};