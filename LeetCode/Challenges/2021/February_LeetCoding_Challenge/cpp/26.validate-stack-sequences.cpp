class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        int n = pushed.size();
        if (n <= 1) return true;

        stack<int> st;
        int psi = 0, ppi = 0;
        while (psi < n) {
            if (st.empty() || st.top() != popped[ppi]) {
                st.push(pushed[psi++]);
            } else {
                st.pop();
                ++ppi;
            }
        }
        while (!st.empty() && st.top() == popped[ppi++])
            st.pop();

        return st.empty();
    }
};