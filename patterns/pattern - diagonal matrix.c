/* Write a program to print NxN matrix where all element are 
increasing from diagonal in both directions horizontally and 
vertically as shown in below examples.

Example:
PrintMatix(3)            PrintMatix(5)
1 2 3                    1 2 3 4 5
2 1 2                    2 1 2 3 4
3 2 1                    3 2 1 2 3
                         4 3 2 1 2
                         5 4 3 2 1

*/

#include <stdio.h>
#include<stdlib.h>


int main() {
	

	int n,i,j;
	scanf("%d",&n);
	int *mat[n];
	for(i=0;i<n;i++)
	{
	    mat[i] = (int *)malloc(n*sizeof(int));
	}
	for(i=0;i<n;i++)
	{
	    for(j=0;j<n;j++)
	    {
	        if(i==j)
                mat[i][j]=1;
            else if(j>i)
            {
                mat[i][j] = j-i+1;
            }
            else if(j<i)
            {
                mat[i][j] = i-j+1;
            }
            
	    }
	}
	
	for(i=0;i<n;i++)
	{
	    for(j=0;j<n;j++)
	    {
	        printf("%d ",mat[i][j]);
	    }
	    printf("\n");
	}
	
	return 0;
}