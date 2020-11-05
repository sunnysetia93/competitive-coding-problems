class Solution {
public:
    int minCostToMoveChips(vector<int>& position) {
        int numEven = 0, numOdd = 0;
        for (int p : position) {
            if (p % 2) {
                ++numOdd;
            } else {
                ++numEven;
            }
        }
        return min(numEven, numOdd);
    }
};