/**
 * For explanation, refer https://briangordon.github.io/2014/08/the-skyline-problem.html
 */

#define fo(i,n)     for(i=0; i<n; i++)
#define pb          push_back
#define all(x)      x.begin(), x.end()
#define sortall(x)  sort(all(x))
#define ll          long long

typedef vector<int>	vi;
typedef vector<vi>	vvi;
typedef vector<ll>	vl;
typedef vector<vl>	vvl;

class Solution {
public:
    vvi getSkyline(vvi& buildings) {
        int i;
        vvi L, R;
        fo (i, buildings.size()) {
            L.pb({buildings[i][0], i});     // L contains {Li, i}
            R.pb({buildings[i][1], i});     // R contains {Ri, i}
        }
        sortall(R);

        vvi ans (1, {-1, -1});
        priority_queue<vl, vvl> pq;         // max heap has {Hi, Ri}
        pq.push({0, (ll)INT_MAX+1});
        int l = 0, r = 0, c, h;
        while (l < L.size() || r < R.size()) 
        {
            if (l < L.size() && L[l][0] <= R[r][0]) 
            {
                i = L[l][1];
                pq.push({buildings[i][2], buildings[i][1]});
                c = L[l++][0];
            } 
            else 
            {
                while (!pq.empty() && pq.top()[1] <= R[r][0])
                    pq.pop();
                c = R[r++][0];
            }
            
            h = pq.top()[0];

            if (ans.back()[1] != h) 
            {
                if (ans.back()[0] == c)
                    ans.pop_back();
                ans.pb({c, h});
            }
        }
        return vector(ans.begin()+1, ans.end());
    }
};