public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int ones = 0;
        for (; n != 0; ++ones, n &= n-1);
        return ones;
    }
}