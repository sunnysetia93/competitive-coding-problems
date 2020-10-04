class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int countKDiffPairs = 0;
        int i = 0, j = 1, diff;
        while (j < nums.size()) {
            diff = nums[j] - nums[i];
            if (diff == k) {
                ++countKDiffPairs;
                while (i < nums.size() && nums[i] == nums[j]-k) ++i;
            } else if (diff < k) {
                ++j;
            } else {
                ++i;
            }
            if (i >= j) j = i+1;
        }
        return countKDiffPairs;
    }
};