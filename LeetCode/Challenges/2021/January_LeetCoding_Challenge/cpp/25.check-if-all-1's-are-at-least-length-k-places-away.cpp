class Solution {
public:
    bool kLengthApart(vector<int>& nums, int k) {
        int dist = k;
        for (int x : nums) {
            if (x == 0)
                ++dist;
            else {
                if (dist < k) return false;
                dist = 0;
            }
        }
        return true;
    }
};