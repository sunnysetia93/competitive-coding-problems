/* 

We need to write a function which accepts a given password and returns “ACCEPTED” or “REJECTED” based on the following rules:

1.  Passwords must consist of a mixture of lowercase letters and numerical digits only, with at least one of each.
2.  Passwords must be between 7 and 11 characters in length. 
3.  Passwords must not contain any sequence of characters immediately followed by the same sequence. 

By : Sunny Setia

*/
#include <stdio.h>
#include<stdlib.h>
#include<ctype.h>
#include<string.h>
int CheckPassword(char str[]);
int check(char str[],int i,int pos);
int main() {

    char str[11];
    
    scanf("%s",str);
    
    int res = CheckPassword(str);
    
    if(res==0)
    {
        printf("REJECTED\n");
    }
    else
    {
        printf("ACCEPTED\n");
    }
	return 0;
}

int CheckPassword(char str[])
{
    int len = strlen(str),i;
    
    if(len<7 || len>11)
    {   
               printf("As has less then 4 or greater than 11 characters\n");
        return 0;
    }
    int cnt=0;
    for(i=0;i<len;i++)
    {
        if((str[i]>57 && str[i]<97) || str[i]>122 || str[i]<48)
        {
            printf("As contains capital or special character !\n");
          return 0;
        }
        if(str[i]>=48 && str[i]<=57)
        {
            cnt++;
        }
    }
    if(cnt<=0)
    {
               printf("As contains no numbers!\n");
        return 0;
    }
    
    int j,pos;
    char temp;
    for(i=0;i<len-1;i++)
    {
        temp = str[i];
        
        if(str[i]==str[i+1])
        {
            printf("Contains consecutive same characters\n");
            return 0;
        }
        
        for(j=i+1;j<len;j++)
        {
            if(temp==str[j])
            {
                printf("%d - %d\n",i,j);
                pos=j;
                int r = check(str,i,pos);
                
                if(r==0)
                {
                    printf("PATTERN FOUND!\n");
                    return 0;
                }

            }
        }

    }
    

    
}

int check(char str[],int i,int pos)
{
    int j,k;
    int flag=0;
    for(j=i+1,k=pos+1;j<pos;j++,k++)
    {
        if(str[j]!=str[k])
        {
            printf("%d-%d - not equal\n",j,k);
            flag=1; //not equal
        }
    }
    
    if(flag==1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}