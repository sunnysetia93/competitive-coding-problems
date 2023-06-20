class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        unordered_set<int> typeSet (candyType.begin(), candyType.end());
        return min(candyType.size()/2, typeSet.size());
    }
};