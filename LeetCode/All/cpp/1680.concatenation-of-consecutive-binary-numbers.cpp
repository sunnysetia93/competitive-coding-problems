using ll = long long;
vector<ll> dp;
const ll MOD = 1e9 + 7;
const int N = 1e5 + 1;

class Solution {

    void solve() {
        dp.resize(N);
        int shift;
        for (int i = 1; i < N; ++i) {
            shift = log2(i) + 1;
            dp[i] = ((dp[i-1] << shift) + i) % MOD;
        }
    }

public:
    int concatenatedBinary(int n) {
        if (dp.empty()) solve();
        return dp[n];
    }
};