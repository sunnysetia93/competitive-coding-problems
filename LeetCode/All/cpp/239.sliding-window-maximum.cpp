class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        ios_base::sync_with_stdio(false);
        vector<int> ans;
        deque<int> dq;
        dq.push_back(-1);
        
        for (int i = 0; i < nums.size(); ++i) {
            if (dq.front() == i-k) {
                dq.pop_front();
            }
            while (!dq.empty() && dq.back() >= 0 && nums[dq.back()] < nums[i]) {
                dq.pop_back();
            }
            dq.push_back(i);
            if (i >= k-1) {
                ans.push_back(nums[dq.front()]);
            }
        }
        return ans;
    }
};