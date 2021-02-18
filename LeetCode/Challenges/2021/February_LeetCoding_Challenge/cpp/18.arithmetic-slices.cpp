class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& A) {
        int result = 0;
        int i = 0, j = 1;
        while (j < A.size()) {
            int d = A[j] - A[i];
            while (j < A.size() && A[j] - A[j-1] == d) ++j;
            
            int n = j-i;
            /**
             * n is the length of an AP subarray starting at i
             * slices should be greater than 3 in size
             * there will be:
             * 1 slice of length n
             * 2 slices of length n-1
             * and so on...
             * n-2 slices of length 3
             * total no. of slices = (n-2) * (n-1) / 2
             */
            result += (n-2) * (n-1) / 2;    
            i = j-1;
        }
        return result;
    }
};