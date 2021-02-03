class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int count = 0, sum;
        for (int i = 0, j = nums.size()-1; i < j; ) {
            sum = nums[i] + nums[j];
            if (sum == k) { ++count; ++i; --j; }
            else if (sum < k) ++i;
            else --j;
        }
        return count;
    }
};