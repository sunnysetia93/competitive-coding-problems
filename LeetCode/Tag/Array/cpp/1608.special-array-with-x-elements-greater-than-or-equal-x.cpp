class Solution {
public:
    int specialArray(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        for (int i = n-1; i >= 0; --i) {
            int count = n-i;
            if (nums[i] >= count) {
                if (i == 0) return count;
                if (nums[i-1] < count) return count;
            }
        }
        return -1;
    }
};