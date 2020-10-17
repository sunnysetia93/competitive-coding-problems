// Input : N
// Input : Arr[N] -> It contains the value of each balloon that we will get after bursting.
// Bursting any balloon A[i], we will get A[i-1]*A[i]*A[i+1]
// For bursting 0 or Nth balloon, we can take A[0-1],A[N+1] as 1
// Finding the maximum value we can get after bursting all the balloons.
// TC: O(N^2)
class Solution {
    int dp[505][505];
public:
    int maxCoins(vector<int>& nums) {
       
       vector<int> m;
       m.push_back(1);
       for(int i=0;i<nums.size();i++) m.push_back(nums[i]);
       m.push_back(1);
        
       int n=m.size()-1;
       
       // Classical Matrix Chain Multiplication Problem.But here we have to maximize.
       // Bottom Up DP Solution
       for (int i = 1; i <= n; i++) {
	     int r = 1, c = i;
	     while (c <= n) {
			 int ans = (r == c ) ? 0 : INT_MIN;
			 for (int k = r; k < c; k++) {
			 	 int prob = dp[r][k] + dp[k + 1][c] + (m[r - 1] * m[k] * m[c]);
				 ans = max(ans, prob);
			 }
			 dp[r][c] = ans;
			 r++; c++;
		    }
	    }
      // Printing the DP matrix
	    // for (int i = 1; i <= n; i++) {
	    // for (int j = 1; j <= n; j++) {
	    // cout << dp[i][j] << " ";
	    // }
	    // cout << endl;
	    // }
	    return dp[1][n];
    }
};
