class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> openingBracket;
        openingBracket[')'] = '(';
        openingBracket['}'] = '{';
        openingBracket[']'] = '[';
        
        for (char ch: s) {
            switch(ch) {
                case '(':
                case '{':
                case '[':
                    st.push(ch);
                    break;

                default:
                    if (st.empty()) return false;
                    if (st.top() != openingBracket[ch]) return false;
                    st.pop();
                    break;
            }
        }
        return st.empty();
    }
};