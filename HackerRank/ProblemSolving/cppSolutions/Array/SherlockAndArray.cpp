#include <bits/stdc++.h>

using namespace std;

/*---------THE PROBLEM--------*/

// HackerRank - Sherlock and Array

// Link - https://www.hackerrank.com/challenges/sherlock-and-array/problem

/*--------SOLUTION---------*/

// function to check whether an array is Sherlock's array or not
//It return "YES" if its a Sherlock's array else "NO"
string balancedSums(vector<int> arr)
{
    int n,i,j,sr,sl;
    n=arr.capacity();
    i=0,j=n-1;
    sr=arr[j];
    sl=arr[i];
    while(i<j)
    {
        if(sl<sr)
        {
            i++;
            sl=sl+arr[i];
        }
        else 
        {
            j--;
            sr=sr+arr[j];
        }
    }
    if(sl==sr)
    return "YES";
    else
    return "NO";

}

/*-----------TEST CASE-----------*/

//Example 1:

//Input: 
//		 2
//		 3
//		 [1,2,3]
//		 4
//		 [1,2,3,3]

//Output: 
//		 NO
//		 YES

/*----------COMPLEXITY------------*/
// O(n) Time complexity, No extra space used

/*---Driver Code---*/
int main(void)
{
	int test;
	cin>>test;
	while(test--)
	{
		int n;
		cin>>n;
		vector<int> arr(n);
		for(int i=0;i<n;i++)
		cin>>arr[i];
		cout<<balancedSums(arr)<<endl;
	}
}
