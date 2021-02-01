class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ones = 0;
        for (; n; ++ones, n &= n-1);
        return ones;
    }
};