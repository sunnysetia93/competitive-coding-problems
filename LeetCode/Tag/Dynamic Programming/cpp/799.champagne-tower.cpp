class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        if (!poured) return 0.0;
        vector<vector<double>> glasses (query_row+1, vector<double> (100, 0.0));

        glasses[0][0] = poured;
        for (int i = 0; i < query_row; ++i) {
            for (int j = 0; j <= i; ++j) {
                double p = (glasses[i][j] - 1.0) / 2;
                if (p > 0) {
                    glasses[i+1][j] += glasses[i+1][j+1] = p;
                }
            }
        }
        return min(1.0, glasses[query_row][query_glass]);
    }
};