/**
 * For explanation please refer:
 * https://leetcode.com/problems/burst-balloons/discuss/76228/Share-some-analysis-and-explanations
 */
class Solution {
    public int maxCoins(int[] nums) {
        int[] numbers = new int[nums.length+2];
        int n = 1;
        for (int num : nums) if (num > 0) numbers[n++] = num;
        numbers[0] = numbers[n++] = 1;
        
        int[][] memoize = new int[n][n];
        return burst(memoize, numbers, 0, n-1);
    }

    private int burst(int[][] memoize, int[] nums, int left, int right) {
        if (left+1 == right) return 0;
        if (memoize[left][right] > 0) return memoize[left][right];
        
        int coins = 0;
        for (int i = left+1; i < right; ++i) {
            coins = Math.max(coins, nums[left]*nums[i]*nums[right] +
                                    burst(memoize, nums, left, i) +
                                    burst(memoize, nums, i, right));
        }
        return memoize[left][right] = coins;
    }
}