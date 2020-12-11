class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0;
        for (int j = 0; j < nums.length; ++j) {
            if (i < 2 || nums[j] > nums[i-2])
                nums[i++] = nums[j];
        }
        return i;
    }
}