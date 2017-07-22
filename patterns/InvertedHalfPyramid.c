/*
    12345
    1234
    123
    12
    1
*/

#include <stdio.h>

int main() {
	
	int n = 5,i,j;
	for(i=n;i>0;i--)
	{
	    for(j=1;j<=i;j++)
	    {
	        printf("%d",j);
	    }
	    printf("\n");
	}
	
	return 0;
}