/*---------SOLUTION---------*/
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        int n=tokens.size();
        stack<int> s;
        for(int i=0;i<n;i++){
            string temp=tokens[i];
            if(temp!="+" and temp!="-" and temp!="*" and temp!="/"){
                int x=stoi(temp);
                s.push(x);
            }else{
                if(temp=="+"){
                    int op1=s.top();
                    s.pop();
                    int op2=s.top();
                    s.pop();
                    s.push(op1+op2);
                }else if(temp=="-"){
                    int op1=s.top();
                    s.pop();
                    int op2=s.top();
                    s.pop();
                    s.push(op2-op1);

                }else if(temp=="*"){
                    int op1=s.top();
                    s.pop();
                    int op2=s.top();
                    s.pop();
                    s.push(op1*op2);
                    
                }else{
                    int op1=s.top();
                    s.pop();
                    int op2=s.top();
                    s.pop();
                    s.push(op2/op1);
                    
                }
            }
        }
        return s.top();
    }
};

/*--------------TEST CASES-----------*/
/*
Example 1:
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/