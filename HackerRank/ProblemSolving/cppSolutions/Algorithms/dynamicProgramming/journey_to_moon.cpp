// Journey To The Moon - HackeRank
// Input - N,M
// N -> Total No of astronaut's
// M -> M Edges (Astronaut have an edge from u->v ,if they belong to the same city)
// Output : No. of ways you can choose two astronaut from different city.
// Approach : (Total no. of ways to select 2 astronauts from available astronauts and subtracting the no. of ways you can choose astronauts from the same city).
// You need to figure out no.(N) of astronauts that belong to the same city and then subtracting NC2 from total no. of ways to select two astronaut.
// To find no. of astonauts that belong to the same city - I have used DFS connected components approach.
// Time Complexity : O(NLogM)
#include <bits/stdc++.h>
using namespace std;
#define ll long long
class Graph {
ll n;
map<ll, list<ll>> m;
public:
	Graph(ll n) {
		this->n = n;
	}
	void addEdge(ll x, ll y) {
		m[x].push_back(y);
		m[y].push_back(x);
	}
  
  // dfs helper
	void dfs_helper(ll src, map<ll, bool> &visited, ll &count) {
		count += 1;
		visited[src] = true;
		for(auto neigh: m[src]) {
			if(!visited[neigh]) {
				dfs_helper(neigh, visited, count);
			}
		}
	}
  
  // dfs call
	ll dfs() {
		map<ll, bool> visited;	

		ll res = (n*(n-1))/2;
		
    // Make all the ids or nodes as unvisited i.e false
		for(auto node_pair:m) {
			ll node = node_pair.first;
			visited[node] = false;
		}
		for(auto node_pair:m) {
			ll id = node_pair.first;
			ll count = 0;
			if(!visited[id]) {
				dfs_helper(id,visited,count);
				res -= (count * (count-1))/2;
			}
		}
		return res;
	}	
};
int main() {
	ll n,p;
	cin >> n >> p;
	Graph g(n);
	for(int i=0;i<p;i++) {
		ll id1,id2;
		cin >> id1 >> id2;
		g.addEdge(id1,id2);
	}
    cout << g.dfs() << endl;
	return 0;
}

// Test Case :
// 5 3
// 0 1
// 2 3
// 0 4
// Output : 5C2 - (3C2 + 2C2) = 6
