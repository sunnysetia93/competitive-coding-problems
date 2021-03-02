class Solution {

public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n = nums.size();
        int diff = accumulate(nums.begin(), nums.end(), 0) - n*(n+1)/2;

        for (int i = 0; i < n; ++i) {
            if (nums[abs(nums[i])-1] < 0)
                return {abs(nums[i]), abs(nums[i])-diff};
            
            nums[abs(nums[i])-1] *= -1;
        }
        return {};
    }
};