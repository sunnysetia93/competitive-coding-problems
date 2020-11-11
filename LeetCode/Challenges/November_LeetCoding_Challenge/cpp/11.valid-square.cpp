class Solution {
    double dist(vector<vector<int>>& coords, int i, int j) {
        return pow(coords[i][0] - coords[j][0], 2) + pow(coords[i][1] - coords[j][1], 2);
    }

public:
    /* After sorting:
          coords[1] * ---- * coords[3]
                    |      |
                    |      |
          coords[0] * ---- * coords[2]
     */
    bool validSquare(vector<int>& p1, vector<int>& p2, vector<int>& p3, vector<int>& p4) {
        vector<vector<int>> coords = {p1, p2, p3, p4};
        sort(coords.begin(), coords.end());

        // check sides
        double s1 = dist(coords, 0, 1);
        if (s1 == 0 ||
            s1 != dist(coords, 0, 2) ||
            s1 != dist(coords, 1, 3) ||
            s1 != dist(coords, 2, 3)) {
            return false;
        }

        // check diagonals
        return dist(coords, 0, 3) == dist(coords, 1, 2);
    }
};