class Solution {
public:
    bool hasAllCodes(string s, const int k) {
        int n = s.length();
        int totalNum = (1<<k);
        int presentCount = 0;

        vector<bool> present(totalNum, false);

        if (n-k+1 < totalNum)
            return false;

        int val = 0;
        for (int i = 0; i < k; ++i)
            val = (val<<1) + (s[i]-'0');

        present[val] = true;
        ++presentCount;

        for (int i = k; i < n; ++i) {
            val = (val<<1) + (s[i]-'0');
            val &= ~(1<<k);
            if (!present[val]) {
                present[val] = true;
                ++presentCount;
            }
        }

        return presentCount == totalNum;
    }
};