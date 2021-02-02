class Solution {
    public int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);
        int count = 0, sum;
        for (int i = 0, j = nums.length-1; i < j; ) {
            sum = nums[i] + nums[j];
            if (sum == k) { ++count; ++i; --j; }
            else if (sum < k) ++i;
            else --j;
        }
        return count;
    }
}