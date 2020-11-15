/**
 * Explanation: 
 * https://leetcode.com/problems/poor-pigs/discuss/94273/solution-with-detailed-explanation
 */

class Solution {
public:
    int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        int states = minutesToTest / minutesToDie + 1;
        return ceil(log(buckets) / log(states));
    }
};