class Solution {
    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
        HashMap<Integer, Integer> freq = new HashMap<Integer, Integer>();
        for (int a : A) {
            for (int b : B) {
                int sum = a+b;
                freq.put(sum, freq.getOrDefault(sum, 0) + 1);
            }
        }

        int res = 0;
        for (int c : C) {
            for (int d : D) {
                res += freq.getOrDefault(-(c+d), 0);
            }
        }
        return res;
    }
}