class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        if (!nums.size()) return {};
        vector<string> result = {to_string(nums[0])};
        int s = 0, e = 1;
        for (; e < nums.size(); ++e) {
            if (nums[e] == nums[e-1] + 1) continue;

            if (e-s > 1) result.back() += "->" + to_string(nums[e-1]);

            result.push_back(to_string(nums[e]));
            s = e;
        }
        if (e-s > 1) result.back() += "->" + to_string(nums[e-1]);

        return result;
    }
};