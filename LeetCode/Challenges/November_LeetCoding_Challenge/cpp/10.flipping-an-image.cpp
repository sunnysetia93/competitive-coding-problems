class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        for (int i = 0; i < A.size(); ++i) {
            int j = -1, k = A[0].size();
            while (++j <= --k) {
                if (A[i][j] == A[i][k]) {
                    A[i][j] = A[i][k] ^= 1;
                }
            }
        }
        return A;
    }
};