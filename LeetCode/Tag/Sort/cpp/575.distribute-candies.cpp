class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        sort(candyType.begin(), candyType.end());
        int numTypes = 0, prevType = 1e5 + 1, n = candyType.size();
        for (int type : candyType)
            if (type != prevType) {
                ++numTypes;
                prevType = type;
            }

        return min(n/2, numTypes);
    }
};