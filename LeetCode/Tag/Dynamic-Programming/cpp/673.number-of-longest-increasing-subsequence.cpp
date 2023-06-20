class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        int maxLISLen = 1;
        vector<int> LISLen(nums.size(), 1);
        vector<int> LISCount(nums.size(), 1);
        for (int j = 1; j < nums.size(); ++j) {
            for (int i = 0; i < j; ++i) {
                if (nums[i] < nums[j]) {
                    if (LISLen[j] < LISLen[i]+1) {
                        LISLen[j] = LISLen[i]+1;
                        LISCount[j] = LISCount[i];
                    } else if (LISLen[j] == LISLen[i]+1) {
                        LISCount[j] += LISCount[i];
                    }
                    maxLISLen = max(maxLISLen, LISLen[j]);
                }
            }
        }
        int numLIS = 0;
        for (int i = 0; i < nums.size(); ++i) {
            if (LISLen[i] == maxLISLen) {
                numLIS += LISCount[i];
            }
        }
        return numLIS;
    }
};