/**
 * This problem can also be solved using 0/1 knapsack.
 */

class Solution {
public:
    bool canPartition(vector<int>& nums) {
        bitset<10001> bits(1);
        int sum = accumulate(nums.begin(), nums.end(), 0);
        if (sum & 1) return false;      // odd sum can't be divided in two equal halves
        
        for (int n : nums) bits |= bits << n;   // every 1 in the bitset corresponds to a possible sum
        return bits[sum >> 1] == 1;     // check if sum/2 is possible
    }
};