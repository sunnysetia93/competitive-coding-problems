class Solution {
public:
    vector<int> shortestToChar(string s, char c) {
        vector<int> result(s.length(), 1e4);
        for (int i = 0; i < s.length(); ++i)
            if (s[i] == c) result[i] = 0;

        for (int i = 1; i < s.length(); ++i)
            if (s[i] != c) result[i] = min(result[i], result[i-1]+1);

        for (int i = s.length()-2; i >= 0; --i)
            if (s[i] != c) result[i] = min(result[i], result[i+1]+1);

        return result;
    }
};