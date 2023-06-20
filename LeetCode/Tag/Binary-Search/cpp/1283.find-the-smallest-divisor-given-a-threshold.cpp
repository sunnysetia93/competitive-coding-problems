/**
 * Explanation:
 * Binary search the result.
 * If the sum > threshold, the divisor is too small.
 * If the sum <= threshold, the divisor is big enough.
 */

typedef unsigned long long ull;

class Solution {
    ull getSum(vector<int>& nums, double divisor) {
        ull sum = 0;
        for (int x : nums) {
            sum += ceil(x / divisor);
        }
        return sum;
    }

public:
    int smallestDivisor(vector<int>& nums, int threshold) {
        int l = 1, r = 1e6, m;
        while (l <= r) {
            m = l + (r-l)/2;
            if (getSum(nums, m) > threshold) {
                l = m+1;
            } else {
                r = m-1;
            }
        }
        return l;
    }
};