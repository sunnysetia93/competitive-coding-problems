#include<bits/stdc++.h>
using namespace std;


long long int helper(long long int denominations[], long long int numD, long long int value, vector<vector<long long int> > &dp){
    if(value==0){
        return 1;
    }
    if(value<0){
        return 0;
    }
    if(numD==0){
        return 0;
    }
    
    if(dp[value][numD]>0){
        return dp[value][numD];
    }
    
    long long int incl=helper(denominations, numD, value-denominations[0],dp);
    long long int excl=helper(denominations+1, numD-1, value,dp);
    
    long long int ans=incl+excl;
    dp[value][numD]=ans;
    
    return ans;
}

int main(){
    long long int n,m;
    cin>>n>>m;
    long long int arr[m];
    for(long long int i=0;i<m;i++){
        cin>>arr[i];
    }
    vector<vector<long long int> > dp(n+1, vector<long long int>(m+1, 0));
    cout<<helper(arr,m,n,dp)<<endl;
    return 0;
}
