class Solution {
    public:
    int maxResult(vector<int>& nums, int k) {
        deque<int> dq;
        dq.push_back(0);
        for (int i = 1; i < k && i < nums.size(); ++i) {
            nums[i] += nums[dq.front()];
            while (!dq.empty() && nums[dq.back()] <= nums[i]) {
                dq.pop_back();
            }
            dq.push_back(i);
        }
        for (int i = k; i < nums.size(); ++i) {
            nums[i] += nums[dq.front()];
            if (dq.front() == i-k) {
                dq.pop_front();
            }
            while (!dq.empty() && nums[dq.back()] <= nums[i]) {
                dq.pop_back();
            }
            dq.push_back(i);
        }
        return nums.back();
    }
};