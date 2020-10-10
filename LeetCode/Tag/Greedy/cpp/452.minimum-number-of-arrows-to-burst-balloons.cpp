/*
Explanation:
We know that eventually we have to shoot down every balloon,
so for each ballon there must be an arrow whose position is between balloon[0] and balloon[1] inclusively.
Given that, we can sort the array of balloons by their ending position. 
Then we make sure that while we take care of each balloon in order, we can shoot as many following balloons as possible.
So what position should we pick each time? We should shoot as to the right as possible, 
because since balloons are sorted, this gives you the best chance to take down more balloons.
Therefore the position should always be balloon[i][1] for the ith balloon.

Example:

balloons = [[7,10], [1,5], [3,6], [2,4], [1,4]]
After sorting, it becomes:

balloons = [[2,4], [1,4], [1,5], [3,6], [7,10]]
So first of all, we shoot at position 4, we go through the array and see that all first 4 balloons
can be taken care of by this single shot. Then we need another shot for one last balloon.
So the result should be 2.
*/

class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        sort(points.begin(), points.end(), [](const vector<int>& p1, const vector<int>& p2) {
            return p1[1] < p2[1];
        });
        int nArrows = 0, i = 0, x;
        while (i < points.size()) {
            ++nArrows;
            x = points[i][1];
            while (++i < points.size() && points[i][0] <= x);
        }
        return nArrows;
    }
};