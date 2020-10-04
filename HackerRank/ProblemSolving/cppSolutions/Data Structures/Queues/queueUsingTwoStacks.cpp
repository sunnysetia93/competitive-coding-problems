#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    stack<int> s1,s2;
    while(n--){
        int x;
        cin>>x;
        if(x==1){
            int temp;
            cin>>temp;
            s1.push(temp);
        }else if(x==2){
            if(s2.empty()){
                while(!s1.empty()){
                    s2.push(s1.top());
                    s1.pop();
                }
            }
            s2.pop();
        }else{
            if(s2.empty()){
                while(!s1.empty()){
                    s2.push(s1.top());
                    s1.pop();
                }
            }
            cout<<s2.top()<<endl;
        }
    }
}
