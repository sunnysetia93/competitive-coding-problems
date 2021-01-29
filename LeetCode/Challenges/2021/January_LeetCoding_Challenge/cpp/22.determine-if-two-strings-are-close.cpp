class Solution {
public:
    bool closeStrings(string word1, string word2) {
        if (word1.length() != word2.length()) return false;
        
        vector<int> freq1 (26, 0), freq2 (26, 0);
        unordered_map<int, int> count1, count2;

        for (char ch : word1) ++freq1[ch-'a'];

        for (char ch : word2) ++freq2[ch-'a'];

        for (int ch = 0; ch < 26; ++ch) {
            if ((!freq1[ch] && freq2[ch]) ||
                (!freq2[ch] && freq1[ch]))
                return false;

            ++count1[freq1[ch]];
            ++count2[freq2[ch]];
        }

        for (auto itr = count1.begin(); itr != count1.end(); ++itr)
            if (count2[itr->first] != itr->second)
                return false;

        return true;
    }
};