class Solution {
public:
    vector<int> mostCompetitive(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> K (k);                      // implements a k-sized stack
        int ki = -1;
        for (int ni = 0; ni < n; ++ni) {
            while (ki >= 0                      // stack is not empty
                   && nums[K[ki]] > nums[ni]    // top element is greater than nums[i]
                   && n - ni >= k - ki)         // after poping, nums still has enough elements to fill the stack
                --ki;                           // stack pop

            if (ki != k-1)                      // if stack is not full
                K[++ki] = ni;                   // stack push
        }

        for (int i = 0; i < k; ++i)
            K[i] = nums[K[i]];                  // fill the stack with element values

        return K;
    }
};