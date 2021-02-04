class Solution {
public:
    int findLHS(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        auto leftItr = nums.begin();
        int result = 0;
        while (1) {
            auto midItr = upper_bound(leftItr, nums.end(), *leftItr);
            if (midItr == nums.end()) break;

            if (*midItr == *leftItr + 1) {
                auto rightItr = upper_bound(midItr, nums.end(), *midItr);
                result = max(result, (int) distance(leftItr, rightItr));
            }
            leftItr = midItr;
        }
        return result;
    }
};