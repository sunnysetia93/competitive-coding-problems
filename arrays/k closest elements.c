#include <stdio.h>
#include<stdlib.h>
void findNearest(int *a,int n,int k,int c);
int binarySearch(int *a,int n,int k);
int main() {

    int t;
    int *a;
    int n,c;
    scanf("%d",&t);

    while(t--)
    {
        scanf("%d",&n);
        a = (int *)malloc(n*sizeof(int));
        int i;
        for(i=0;i<n;i++)
        {
            scanf("%d",&a[i]);
        }
        int k;
        
        scanf("%d",&c);
        scanf("%d",&k);

        
        findNearest(a,n,k,c);
        
    }
	return 0;
}

void findNearest(int *a,int n,int k,int c)
{
    int pos = binarySearch(a,n,k);   
    
    int x = c;
    int rdiff = a[pos+1] - a[pos];
    int r = pos+1;
    int l = pos-1;
    int ldiff = a[pos] - a[pos-1];
    

    while(x>0)
    {
            rdiff = a[pos+r] - a[pos];
            ldiff = a[pos] - a[pos-l];
        if(rdiff<=ldiff && r<n)
        {
            printf("%d ",a[r]);
            r++;
        }
        else
        {
            printf("%d ",a[l]);
            l--;

        }

        x--;
    }
    
    while(x>0 && l>=0)
    {
        printf("%d ",a[l]);
        l--;
        x--;
    }
    while(x>0 && r<n)
    {
        printf("%d ",a[r]);
        r++;
        x--;
    }

}

int binarySearch(int *a,int n,int k)
{
    int beg = 0,end=n-1;
    int mid;

    while(beg<=end)
    {
        mid = (beg+end)/2;

        
        if(a[mid]==k)
        {
            return mid;
        }
        
        else if(a[mid]<k)
        {
            beg=mid+1;

        }
        else
        {
            end = mid-1;
        }
    }
}