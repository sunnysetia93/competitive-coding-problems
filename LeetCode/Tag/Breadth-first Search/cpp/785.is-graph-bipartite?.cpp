class Solution {
    
    bool bft(vector<vector<int>>& graph, vector<int>& color, int u) {
        queue<int> q;
        q.push(u);
        color[u] = 1;
        while (!q.empty()) {
            int qsize = q.size();
            while (qsize--) {
                int uu = q.front(); q.pop();
                for (int v : graph[uu]) {
                    if (!color[v]) {
                        q.push(v);
                        color[v] = color[uu] ^ 3;   // converts 1 -> 2, and, 2 -> 1
                    }
                    if (color[v] == color[uu])
                        return false;
                }
            }
        }
        return true;
    }
    
public:
    bool isBipartite(vector<vector<int>>& graph) {
        int n = graph.size();
        if (n <= 2) return true;
        
        vector<int> color (n, 0);
        for (int u = 0; u < n; ++u)
            if (!color[u])
                if (!bft(graph, color, u))
                    return false;

        return true;
    }
};