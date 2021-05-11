#define fo(i,n)    for(i=0;i<n;i++)
#define pb         push_back
#define tr(it, a)  for(auto it = a.begin(); it != a.end(); it++)

typedef vector<int> vi;

class Solution {
public:
    int minJumps(vector<int>& arr) {
        int i;
        unordered_map<int, vi> valIndices;
        fo(i, arr.size())
            valIndices[arr[i]].pb(i);

        int n = arr.size();
        vi vis(n, 0);

        queue<int> q;
        q.push(0);
        vis[0] = 1;
        int step = -1;
        while (!q.empty()) {
            ++step;
            int qsize = q.size();
            fo(i, qsize) {
                int j = q.front(); q.pop();
                if (j == n-1) return step;
                vis[j] = 1;
                if (j > 0 && !vis[j-1]) q.push(j-1);
                if (!vis[j+1]) q.push(j+1);
                tr (it, valIndices[arr[j]])
                    if (!vis[*it]) q.push(*it);
                valIndices[arr[j]].clear();   // avoid later lookup of valIndices[arr[j]]
            }
        }
        return -1;
    }
};