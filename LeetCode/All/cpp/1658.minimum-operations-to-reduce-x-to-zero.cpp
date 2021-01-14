class Solution {
public:
    int minOperations(vector<int>& nums, int x) {
        int target = accumulate(nums.begin(), nums.end(), 0) - x;
        if (target < 0) return -1;
        if (target == 0) return nums.size();

        int maxSubArrayLen = 0;

        for (int s = 0, e = 0, currSum = 0; e < nums.size(); ++e) {
            currSum += nums[e];

            while (currSum >= target) {
                if (currSum == target)
                    maxSubArrayLen = max(maxSubArrayLen, e - s + 1);

                currSum -= nums[s++];
            }
        }

        return maxSubArrayLen ? nums.size() - maxSubArrayLen : -1;
    }
};