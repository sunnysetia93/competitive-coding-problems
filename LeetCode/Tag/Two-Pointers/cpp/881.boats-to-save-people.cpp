/**
 * Explanation:
 * Sort people.
 * For the current heaviest person, we try to let him go with the lightest person.
 * As all people need to get on the boat.
 * If the sum of weight is over the limit, we have to let the heaviest go alone.
 * No one can take the same boat with him.
 */
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort (people.rbegin(), people.rend());
        int i = 0;
        for (int j = people.size()-1; i <= j; ++i)
            if (people[i] + people[j] <= limit)
                --j;

        return i;
    }
};