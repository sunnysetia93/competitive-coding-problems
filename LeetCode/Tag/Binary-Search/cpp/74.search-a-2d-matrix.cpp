class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (!matrix.size() || !matrix[0].size()) return false;
        int m = matrix.size(), n = matrix[0].size();
        int lo = 0, hi = m*n - 1, mid;
        int i, j;
        while (lo <= hi) {
            mid = lo + (hi-lo)/2;
            i = mid / n;
            j = mid % n;
            if (target == matrix[i][j])
                return true;
            else if (target < matrix[i][j])
                hi = mid-1;
            else
                lo = mid+1;
        }
        return false;
    }
};