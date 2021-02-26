class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        int n = nums.size();
        vector<int> maxLeft(n, -1e5-1), minRight(n, 1e5+1);
        maxLeft[0] = nums[0];
        minRight.back() = nums.back();        
        for (int i = 1, j = n-2; i < n; ++i, --j) {
            maxLeft[i] = max(nums[i], maxLeft[i-1]);
            minRight[j] = min(nums[j], minRight[j+1]);
        }

        int start = 0, end = n-1;
        for (int i = 0; i+1 < n && maxLeft[i] <= minRight[i+1]; ++i, ++start);
        for (int j = n-1; j-1 >= 0 && maxLeft[j-1] <= minRight[j] && start < end; --j, --end);
        int result = end - start + 1;
        return result > 1 ? result : 0;
    }
};