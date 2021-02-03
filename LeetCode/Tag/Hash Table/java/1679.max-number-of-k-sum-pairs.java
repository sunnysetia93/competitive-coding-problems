class Solution {
    public int maxOperations(int[] nums, int k) {
        HashMap<Integer, Integer> freq = new HashMap<>();
        int count = 0;
        for (int x : nums) {
            if (freq.getOrDefault(k-x, 0) > 0) {
                ++count;
                freq.put(k-x, freq.get(k-x) - 1);
            } else {
                freq.put(x, freq.getOrDefault(x, 0) + 1);
            }
        }
        return count;
    }
}