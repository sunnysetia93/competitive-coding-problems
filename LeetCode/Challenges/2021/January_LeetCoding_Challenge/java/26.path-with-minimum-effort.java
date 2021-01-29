class Solution {
    private int M, N;
    
    // BFS
    private boolean isPathPossible(int[][] hts, int k) {
        int[][] dirn = {{0, -1}, {-1, 0}, {0, 1}, {1, 0}};
        boolean[][] visited = new boolean[M][N];

        Queue<Pair<Integer, Integer>> q = new LinkedList<>();
        q.add(new Pair<>(0, 0));
        visited[0][0] = true;
        while(q.size() > 0) {
            int qsize = q.size();
            for (int i = 0; i < qsize; ++i) {
                int r = q.peek().getKey(), c = q.peek().getValue();
                q.remove();

                if (r == M-1 && c == N-1) return true;

                for (int j = 0; j < 4; ++j) {
                    int rr = r + dirn[j][0];
                    int cc = c + dirn[j][1];
                    if (rr < 0 || rr >= M || cc < 0 || cc >= N
                        || visited[rr][cc]
                        || Math.abs(hts[r][c] - hts[rr][cc]) > k) continue;
                    
                    q.add(new Pair<>(rr, cc));
                    visited[rr][cc] = true;
                }
            }
        }
        return false;
    } 
    
    public int minimumEffortPath(int[][] hts) {
        M = hts.length;
        N = hts[0].length;
        if (M == 1 && N == 1) return 0;

        // find the min and max efforts possible
        int minEffort = 1000000, maxEffort = 0;
        for (int i = 0; i < M; ++i) {
            for (int j = 0; j < N; ++j) {
                minEffort = Math.min(minEffort,
                                     Math.min(i > 0 ? Math.abs(hts[i-1][j] - hts[i][j]) : 1000000,
                                              j > 0 ? Math.abs(hts[i][j-1] - hts[i][j]) : 1000000));
                maxEffort = Math.max(maxEffort,
                                     Math.max(i > 0 ? Math.abs(hts[i-1][j] - hts[i][j]) : -1,
                                              j > 0 ? Math.abs(hts[i][j-1] - hts[i][j]) : -1));
            }
        }

        // binary search between min and max effort
        // to find the least effort required to reach the destination
        int l = minEffort-1, r = maxEffort+1, m;
        while (r-l > 1) {
            m = l + (r-l)/2;
            if (isPathPossible(hts, m))
                r = m;
            else
                l = m;
        }
        return r;
    }
}