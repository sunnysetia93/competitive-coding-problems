class Solution {
    public int maximumUniqueSubarray(int[] nums) {
        boolean[] present = new boolean[10001];
        int sum = 0, maxSum = 0;
        for (int i = 0, j = 0; j < nums.length; ++j) {
            if (!present[nums[j]]) {
                present[nums[j]] = true;
                sum += nums[j];
            } else {
                maxSum = Math.max(maxSum, sum);
                while (i < j && nums[i] != nums[j]) {
                    present[nums[i]] = false;
                    sum -= nums[i++];
                }
                ++i;
            }
        }
        maxSum = Math.max(maxSum, sum);
        return maxSum;
    }
}