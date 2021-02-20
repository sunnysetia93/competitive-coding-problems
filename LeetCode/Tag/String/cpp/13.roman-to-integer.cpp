class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> valOf = {{'I', 1}, {'V', 5},
                                      {'X', 10}, {'L', 50},
                                      {'C', 100}, {'D', 500},
                                      {'M', 1000}};
        int result = valOf[s.back()];
        for (int i = s.length()-2; i >= 0; --i) {
            if (valOf[s[i]] < valOf[s[i+1]]) result -= valOf[s[i]];
            else result += valOf[s[i]];
        }
        return result;
    }
};