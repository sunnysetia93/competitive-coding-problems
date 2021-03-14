class Solution {
public:
    string minRemoveToMakeValid(string s) {
        deque<int> invalidIndex;
        for (int i = 0; i < s.length(); ++i) {
            if (isalpha(s[i])) continue;

            if (s[i] == '(')
                invalidIndex.push_back(i);
            else if (!invalidIndex.empty() && s[invalidIndex.back()] == '(')
                invalidIndex.pop_back();
            else
                invalidIndex.push_back(i);
        }

        string result;
        int i = 0;
        for (; i < s.length() && !invalidIndex.empty(); ++i) {
            if (i == invalidIndex.front())
                invalidIndex.pop_front();
            else
                result.push_back(s[i]);
        }
        result += s.substr(i);
        return result;
    }
};