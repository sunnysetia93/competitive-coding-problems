class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        if (nums.size() <= 2) return false;
        vector<int> minLeft(nums.size());
        stack<int> st;
        minLeft[0] = nums[0];
        for (int i = 1; i < nums.size(); ++i) {
            minLeft[i] = min(nums[i], minLeft[i-1]);
        }

        for (int j = nums.size()-1; j > 0; --j) {
            if (minLeft[j] >= nums[j]) continue;
            while (!st.empty() && st.top() <= minLeft[j])
                st.pop();
            if (!st.empty() && st.top() < nums[j])
                return true;
            st.push(nums[j]);
        }
        return false;
    }
};