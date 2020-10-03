#include<bits/stdc++.h>
using namespace std;

/*---------SOLUTION----------*/
class Solution {
public:
    bool helper(string str){
        stack<char> s;
        for(int i=0;i<str.length();i++){
            char ch=str[i];
            if(ch!=')' and ch!=']' and ch!='}'){
                s.push(ch);
            }else{
                if(s.empty()){
                    return false;
                }
                if(ch==')'){
                    if(s.top()=='('){
                        s.pop();
                    }else{
                        return false;
                    }
                }else if(ch==']'){
                    if(s.top()=='['){
                        s.pop();
                    }else{
                        return false;
                    }

                }else if(ch=='}'){
                    if(s.top()=='{'){
                        s.pop();
                    }else{
                        return false;
                    }
                }
            }
        }
        if(s.empty()){
            return true;
        }else{
            return false;
        }
    }
    bool isValid(string s) {
        return helper(s);
    }
};

/*-------------TEST CASES---------*/
/*
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true
*/

/*------DRIVER CODE-----*/
int main(){
	Solution sol;
	string str="()[]{}";
	cout<<sol.isValid(str)<<endl;
}
