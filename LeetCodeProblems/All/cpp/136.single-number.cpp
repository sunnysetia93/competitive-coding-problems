#include<bits/stdc++.h>
using namespace std;

/*---------THE PROBLEM--------*/

// Leetcode 136 - Single Number

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

/*--------SOLUTION---------*/

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans=nums[0];
        for(int i=1;i<nums.size();i++){
            ans^=nums[i];
        }
        return ans;
    }
};

/*-----------TEST CASE-----------*/

//Example 1:
//Input: [2,2,1]
//Output: 1

//Example 2:
//Input: [4,1,2,1,2]
//Output: 4


/*----------COMPLEXITY------------*/
// O(n) Time complexity, No extra space used

/*---Driver Code---*/
int main(){
	Solution sol;
	vector<int> input={2,2,1};
	cout<<sol.singleNumber(input)<<endl;
}
