class Solution {

    private enum DIRN {
        RIGHT, DOWN, LEFT, UP
    }

    public int[][] generateMatrix(int n) {
        int x = 0;
        int[][] arr = new int[n][n];
        DIRN dirn = DIRN.RIGHT;
        for (int r = 0, c = 0, w = n, h = n; w != 0 && h != 0;) {
            switch(dirn) {
                case RIGHT:
                    for (int j = c; j < c + w; ++j) {   // move right for w steps in the same row r
                        arr[r][j] = ++x;
                    }
                    r += 1;         // update row
                    c += w-1;       // update column
                    --h;            // update height
                    dirn = DIRN.DOWN;   // next direction
                    break;

                case DOWN:
                    for (int i = r; i < r + h; ++i) {   // move down for h steps in the same column c
                        arr[i][c] = ++x;
                    }
                    r += h-1;       // update row
                    c -= 1;         // update column
                    --w;            // update width
                    dirn = DIRN.LEFT;   // next direction
                    break;

                case LEFT:
                    for (int j = c; j > c-w; --j) {     // move left for w steps in the same row r
                        arr[r][j] = ++x;
                    }
                    r -= 1;         // update row
                    c -= w-1;       // update column
                    --h;            // update height
                    dirn = DIRN.UP;     // next direction
                    break;

                case UP:
                    for (int i = r; i > r-h; --i) {     // move up for h steps in the same column c
                        arr[i][c] = ++x;
                    }
                    r -= h-1;       // update row
                    c += 1;         // update column
                    --w;            // update width
                    dirn = DIRN.RIGHT;      // next direction
                    break;
            }
        }
        return arr;
    }
}