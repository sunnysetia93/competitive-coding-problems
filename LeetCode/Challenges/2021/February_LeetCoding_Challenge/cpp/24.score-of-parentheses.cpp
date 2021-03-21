class Solution {
    
    int score(string& s, int& i) {
        if (i == s.length()) return 0;
        int innerSum = 0;
        while (++i < s.length() && s[i] != ')') innerSum += score(s, i);
        return innerSum == 0 ? 1 : 2*innerSum;
    }
    
public:
    
    int scoreOfParentheses(string s) {
        int i = -1;
        return score(s, i)/2;
    }
};