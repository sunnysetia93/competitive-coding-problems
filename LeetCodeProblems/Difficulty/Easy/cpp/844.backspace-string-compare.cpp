#include<bits/stdc++.h>
using namespace std;

/*------SOLUTION-------*/
class Solution {
public:
    bool backspaceCompare(string S, string T) {
        int n1=S.length();
        stack<char> s1;
        for(auto x:S){
            if(x!='#'){
                s1.push(x);
            }else{
                if(!s1.empty()) s1.pop();
            }
        }
        int n2=T.length();
        stack<char> s2;
        for(auto x:T){
            if(x!='#'){
                s2.push(x);
            }else{
                if(!s2.empty()) s2.pop();
            }
        }
        
        return s1==s2;
    }
};

/*------TEST CASES------*/
/*
Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/

/*---DRIVER CODE---*/
int main(){
	Solution sol;
	string input1="ab#c";
	string input2="ad#c";
	cout<<sol.backspaceCompare(input1,input2)<<endl;
}