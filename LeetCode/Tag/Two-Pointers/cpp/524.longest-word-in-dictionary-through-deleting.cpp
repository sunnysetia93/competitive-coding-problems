class Solution {

    bool sequencePossible(string& s, string& ds) {
        if (s.length() < ds.length()) return false;

        int si = 0, di = 0;
        while (si < s.length() && di < ds.length())
            if (s[si++] == ds[di])
                ++di;

        return di == ds.length();
    }
    
public:
    string findLongestWord(string s, vector<string>& d) {
        int maxLen = 0;
        string result;
        for (string& ds : d) {
            if (sequencePossible(s, ds)) {
                if (maxLen < ds.length()) {
                    maxLen = ds.length();
                    result = ds;
                } else if (maxLen == ds.length() && ds < result) {
                    result = ds;
                }
            }
        }
        return result;
    }
};