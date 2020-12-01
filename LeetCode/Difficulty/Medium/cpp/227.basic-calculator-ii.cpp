class Solution {

    int getNextNum(string& s, int& i) {
        while (i < s.length() && s[i] == ' ') ++i;
        int num = 0;
        while (i < s.length() && isdigit(s[i]))
            num = 10*num + (s[i++]-'0');

        return num;
    }

    char getNextOpr(string& s, int& i) {
        while (i < s.length() && s[i] == ' ') ++i;
        return !isdigit(s[i]) ? s[i++] : '+';
    }

public:
    int calculate(string s) {
        stack<int> st;
        int i = 0;
        while (i < s.length()) {
            char opr = getNextOpr(s, i);
            switch(opr) {
                case '+':
                    st.push(getNextNum(s, i));
                    break;
                case '-':
                    st.push(-getNextNum(s, i));
                    break;
                case '*': 
                    st.top() *= getNextNum(s, i);
                    break;
                case '/':
                    st.top() /= getNextNum(s, i);
                    break;
            }
        }
        int sum = 0;
        while (!st.empty()) {
            sum += st.top();
            st.pop();
        }
        return sum;
    }
};