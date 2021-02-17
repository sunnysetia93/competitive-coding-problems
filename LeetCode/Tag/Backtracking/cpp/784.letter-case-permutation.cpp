class Solution {
    vector<string> result;
    
    void solve(string& s, string& curr, int i) {
        if (i == s.length()) {
            result.push_back(curr);
            curr.pop_back();
            return;
        }
        if (isdigit(s[i])) {
            curr.push_back(s[i]);
            solve(s, curr, i+1);
        }
        else {
            curr.push_back(toupper(s[i]));
            solve(s, curr, i+1);
            curr.push_back(tolower(s[i]));
            solve(s, curr, i+1);
        }
        curr.pop_back();
    }
    
public:
    vector<string> letterCasePermutation(string s) {
        string curr;
        solve(s, curr, 0);
        return result;
    }
};