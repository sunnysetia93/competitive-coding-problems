class Solution {
public:
    int getMaximumGenerated(int n) {
        if (n <= 1) return n;
        int nums[101] = {0, 1};
        int maxGen = 0;
        for (int i = 2; i <= n; ++i) {
            nums[i] = nums[i/2];
            if (i % 2) nums[i] += nums[i/2 + 1];

            maxGen = max(maxGen, nums[i]);
        }
        return maxGen;
    }
};