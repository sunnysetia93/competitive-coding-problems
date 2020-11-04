/* 
 * The implementation is similar to the BFS topological sort. Remove the leaves,
 * update the degrees of inner vertexes. Then remove the new leaves.
 * Doing so level by level until there are 2 or 1 nodes left.
 * What's left is our answer!
 */
class Solution {
public:
    
    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
        vector<int> indegrees (n, 0);
        vector<vector<int>> adj_list (n);
        
        // calculating indegrees and creating the adjacency list
        for (vector<int>& edge: edges) {
            ++indegrees[edge[0]];
            adj_list[edge[0]].push_back(edge[1]);
            ++indegrees[edge[1]];
            adj_list[edge[1]].push_back(edge[0]);
        }

        queue<int> q;
        for (int node = 0; node < n; ++node) {
            if (indegrees[node] <= 1) {
                q.push(node);
            }
        }

        int q_size;
        while (n > 2) {
            q_size = q.size();
            for (int i = 0; i < q_size; ++i) {
                int u = q.front();
                q.pop();
                --indegrees[u];

                --n;
                for (int v : adj_list[u]) {
                    if (indegrees[v] == 0) {
                        continue;
                    }
                    if (--indegrees[v] == 1) {
                        q.push(v);
                    }
                }
            }
        }

        vector<int> ans;
        while (!q.empty()) {
            ans.push_back(q.front());
            q.pop();
        }
        return ans;
    }
};