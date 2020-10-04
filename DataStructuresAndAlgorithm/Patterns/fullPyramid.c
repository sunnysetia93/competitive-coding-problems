/*
                    * 
                  * * * 
                * * * * * 
              * * * * * * * 
            * * * * * * * * * 
            
                * 
               * * 
              * * * 
             * * * * 
            * * * * * 

*/

#include <stdio.h>

void pattern1(int n);
void pattern2(int n);
int main() {
	
	int n = 5;
    
    pattern1(n);
    printf("\n");
    pattern2(n);
	
	return 0;
}
void pattern1(int n)
{
    int i,j,k;
	for(i=1;i<=n;i++)
	{
	    for(j=1;j<=(n-i);j++)
        {
            printf("  ");
        }
	    for(k=1;k<=((2*i)-1);k++)
	    {
	        printf("* ");
	    }
    
        printf("\n");
	    
	}
}
void pattern2(int n)
{
    int i,j,k;
	for(i=1;i<=n;i++)
	{
	    for(j=1;j<=(n-i);j++)
        {
            printf(" ");
        }
	    for(k=1;k<=i;k++)
	    {
	        printf("* ");
	    }
    
        printf("\n");
	    
	}
}
