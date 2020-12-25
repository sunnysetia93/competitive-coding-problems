class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& matrix) {
        int m = matrix.size();
        if (!m) return {};

        int n = matrix[0].size();

        vector<int> result (m*n);
        int r = 0, c = 0, d = 1;
        for (int i = 0; i < result.size(); ++i) {
            result[i] = matrix[r][c];

            r -= d;
            c += d;
            
            if (r >= m) { r = m-1; c += 2; d = -d; }    // crossed last row, move right in the last row
            if (c >= n) { c = n-1; r += 2; d = -d; }    // crossed last column, move down in the last column
            if (r < 0) { r = 0; d = -d; }       // crossed first row
            if (c < 0) { c = 0; d = -d; }       // crossed first column
        }
        return result;
    }
};