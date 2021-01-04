class Solution {
    public boolean increasingTriplet(int[] nums) {
        int minA = Integer.MAX_VALUE, minB = Integer.MAX_VALUE;
        for (int n : nums) {
            if (n <= minA) {
                minA = n;
            } else if (n <= minB) {
                minB = n;
            } else {
                return true;
            }
        }
        return false;
    }
}