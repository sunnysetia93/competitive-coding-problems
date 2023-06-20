class Solution {
    /* Since this question is a follow-up to House Robber,
     * we can assume we already have a way to solve the simpler question,
     * i.e. given a 1 row of house, we know how to rob them.
     * We modify it a bit to rob a given range of houses [lo, hi].
     */
    int rob(vector<int>& nums, int lo, int hi) {
        int include = 0, exclude = 0;
        for (int i = lo; i <= hi; ++i) {
            int incl = exclude + nums[i];
            exclude = max(include, exclude);
            include = incl;
        }
        return max(include, exclude);
    }

public:

    /* you can break the circle by assuming a house is not robbed
     * Since every house is either robbed or not robbed and at least half 
     * of the houses are not robbed, the solution is simply the larger of 
     * two cases with consecutive houses, i.e. house i not robbed, break the circle,
     * solve it, or house i + 1 not robbed. Hence, the following solution. 
     * I chose i = n and i + 1 = 0 for simpler coding. But, you can choose whichever two consecutive ones.
     */
    int rob(vector<int>& nums) {
        if (!nums.size()) return 0;
        if (nums.size() == 1) return nums[0];
        return max (rob(nums, 0, nums.size()-2), rob(nums, 1, nums.size()-1));
    }
};