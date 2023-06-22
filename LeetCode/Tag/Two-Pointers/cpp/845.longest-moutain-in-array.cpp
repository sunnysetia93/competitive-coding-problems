class Solution {
public:
    int longestMountain(vector<int>& A) {
        int maxLen = 0, n = A.size();
        int i = 0;
        while (i < n-2) {
            if (A[i] >= A[i+1]) {
                ++i;
                continue;
            }
            int j = i;
            while (i+1 < A.size() && A[i] < A[i+1]) {
                ++i;
            }
            if (i+1 == A.size() || A[i] == A[i+1]) {
                continue;
            }
            while (i+1 < A.size() && A[i] > A[i+1]) {
                ++i;
            }
            maxLen = max(maxLen, i-j+1);
        }
        return maxLen;
    }
};