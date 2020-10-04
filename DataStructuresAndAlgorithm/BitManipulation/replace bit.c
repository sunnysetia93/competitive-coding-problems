#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<math.h>
int fetchBits(char ch[],int n);
int main() {

    int t,n,k;
    int i;
    char ch[256];
    
    scanf("%d",&t);
    
    while(t--)
    {
        scanf("%d",&n);
        scanf("%d",&k);
     
       int p = fetchBits(ch,n);
        
        if(ch[k-1]==1)
        {

            ch[k-1]=0;
        }
        
        int sum=0;
        
        for(i=0;i<p;i++)
        {
            sum = sum + ch[i]*pow(2,p-1-i);
            
        }
        
        printf("\n%d",sum);
    }
	return 0;
}
int fetchBits(char ch[],int n)
{
    int r,i,p=0;
    while(n>0)
    {
        r = n%2;
        ch[p]=r;
        p++;
        
        n=n/2;
    }
    int j;
    int temp;
    for(i=0,j=p-1;i<(p)/2;i++,j--)
    {
        temp=ch[i];
        ch[i]=ch[j];
        ch[j]=temp;
        
    }
    
    return p;
}