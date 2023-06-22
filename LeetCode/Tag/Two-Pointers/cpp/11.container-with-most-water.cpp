class Solution {
public:
    int maxArea(vector<int>& A) {
        int l = 0, r = A.size()-1, maxArea = 0;
        while(l < r) {
            maxArea = max((r-l) * min(A[l], A[r]), maxArea);
            if(A[l] < A[r])
                ++l;
            else
                --r;
        }
        return maxArea;
    }
};