class Solution {

    private static long[] dp;
    private static final long MOD = 1000000007L;
    private static final int N = 100001;

    private void solve() {
        dp = new long[N];
        int shift;
        for (int i = 1; i < N; ++i) {
            shift = (int) (Math.log(i) / Math.log(2)) + 1;
            dp[i] = ((dp[i-1] << shift) + i) % MOD;
        }
    }

    public int concatenatedBinary(int n) {
        if (dp == null) solve();
        return (int) dp[n];
    }
}