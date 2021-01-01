class Solution {
public:
    int largestRectangleArea(vector<int>& A) {
        A.push_back(0);
        int m = A.size();

        int ans = 0, pos;
        stack<int> st;

        for (int i = 0; i < m; i++) {
            while (!st.empty() && A[st.top()] >= A[i]) {
                pos = st.top(); st.pop();
                ans = max(ans, A[pos] * (st.empty() ? i : i-st.top()-1));
            }
            st.push(i);
        }
        return ans;
    }
};