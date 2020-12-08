/**
 * Difficulty: Medium
 * Tags: Array
 */
class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        int result = 0;
        int[] remainderCounts = new int[60];
        for (int t : time) {
            t %= 60;
            result += remainderCounts[(60 - t) % 60];
            ++remainderCounts[t];
        }
        return result;
    }
}