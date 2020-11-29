#define rangeN(i,n) for(i=0; i<n; i++)
#define rangeMN(i,m,n) for(i=m; (m<n ? i<n : i>n); (m<n ? i++ : i--))

class Solution {
public:
    int minimumMountainRemovals(vector<int>& nums) {
        int n = nums.size(), i, j;
        vector<int> lis(n, 1), lds(n, 1);

        // Longest Increasing Subsequence for each index [1, n-1]
        rangeMN(i, 1, n)
            rangeN(j, i)
                if (nums[j] < nums[i])
                    lis[i] = max(lis[i], lis[j]+1);

        // Longest Decreasing Subsequence for each index [0, n-2]
        rangeMN(i, n-2, -1)
            rangeMN(j, n-1, i)
                if (nums[j] < nums[i])
                    lds[i] = max(lds[i], lds[j]+1);

        // mountain length at index i is lis[i] + lds[i] - 1
        int longestMountainLen = 0;
        rangeMN(i, 1, n)
            longestMountainLen = max (longestMountainLen, lis[i] + lds[i] - 1);

        return n - longestMountainLen;
    }
};