class Solution {
public:
    string removeDuplicateLetters(string s) {
        vector<int> freq (26, 0);
        vector<bool> included (26, false);
        string result;

        for (char ch: s) ++freq[ch - 'a'];

        for (char ch: s) {
            if (!included[ch-'a']) {
                while (!result.empty() && result.back() >= ch && freq[result.back()-'a'] > 0) {
                    included[result.back()-'a'] = false;
                    result.pop_back();
                }
                result.push_back(ch);
                included[ch-'a'] = true;
            }
            --freq[ch-'a'];
        }
        return result;
    }
};