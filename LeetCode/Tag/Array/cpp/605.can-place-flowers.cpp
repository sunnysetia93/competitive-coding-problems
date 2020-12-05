/**
 * Difficulty: Easy
 * Tags: Array, Greedy
 */
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        if (!n)
            return true;

        for (int i = 0; i < flowerbed.size(); ++i) {
            if (flowerbed[i])
                continue;
            if (i && flowerbed[i-1])
                continue;
            if (i < flowerbed.size()-1 && flowerbed[i+1])
                continue;

            flowerbed[i] = 1;
            if (--n == 0)
                return true;
        }
        return false;
    }
};