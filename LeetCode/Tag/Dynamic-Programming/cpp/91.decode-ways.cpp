class Solution {

    int dfs(string& s, vector<int>& numWays, int i) {
        if (i == s.length()) return 1;
        if (numWays[i] > -1) return numWays[i];   // dp
        if (s[i] == '0') return numWays[i] = 0;
        if (i == s.length()-1) return numWays[i] = 1;

        numWays[i] = dfs(s, numWays, i+1);    // dfs on left child

        if (s[i] > '2' || (s[i] == '2' && s[i+1] > '6'))    // num greater than 26, right child doesn't exist 
            return numWays[i];

        return numWays[i] += dfs(s, numWays, i+2);    // dfs on right child
    }

public:
    int numDecodings(string s) {
        vector<int> numWays(s.length(), -1);
        return dfs(s, numWays, 0);
    }
};