/*
55555
44445
33345
22345
12345

*/
#include <stdio.h>
#include<stdlib.h>
int main(void) {
    int n;
    scanf("%d",&n);
    
    int a[n][n];
    int i,j;
    for(i=0;i<n;i++)
    {
        int t = n-i-1;
        for(j=0;j<t;j++)
        {
            a[i][j]=t+1;   
        }
        for(j=t;j<n;j++)
        {
            a[i][j]=j+1;
        }
    }
    
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            printf("%d ",a[i][j]);        
        }
        
        printf("\n");
    }
	return 0;
}

