class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int i = nums.size()-1;
        for (; i > 0 && nums[i] <= nums[i-1]; --i);
        reverse(nums.begin()+i, nums.end());
        if (i > 0) {
            auto itr = upper_bound(nums.begin()+i, nums.end(), nums[i-1]);
            swap(nums[i-1], *itr);
        }
    }
};