/*
 * Divide the array in different sets where number of sets 
 * is equal to GCD of nums.size() and k, and, move the elements within sets.
 */
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        k %= nums.size();
        if (k == 0) return;
        int _gcd = gcd(nums.size(), k);
 
        for (int i = 0; i < _gcd; ++i) {
            int nJumps = nums.size() / _gcd;
            int tmp = nums[i];
            while (nJumps--) {
                i = (i+k) % nums.size();
                swap(tmp, nums[i]);
            }
        }
    }
};