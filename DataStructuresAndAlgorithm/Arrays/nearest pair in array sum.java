import java.io.*;
import java.util.*;
class GFG {
	static Scanner sc = new Scanner(System.in);
	public static void main (String[] args) {
    
                
        int n = sc.nextInt();
        int sum = sc.nextInt();
        int[] a = new int[n];
        for(int i=0;i<n;i++)
        {
            a[i]=sc.nextInt();   
        }
        int x=100,ipos=0,jpos=0;
        Arrays.sort(a);
        int i=0,j=n-1,flag=0;
        while(i<n/2)
        {
               if(a[i]+a[j]==sum)
               {
                   flag=1;
                   System.out.println("pairs are : " + a[i] + "," + a[j]);
                   break;
               }
               else if(a[i]+a[j]>sum)
               {

                    if(x>a[i]+a[j]-sum)
                    {
                        x = a[i]+a[j] - sum;
                        ipos=i;
                        jpos=j;
                        
                    }
                   j--;
               }
               else
               {
                   
                    if(x>sum-a[i]+a[j])
                    {
                        x =  sum - a[i]+a[j];
                        ipos=i;
                        jpos=j;
                        
                    }
                   i++;
               }
        }
        
        if(flag==0)
        {
            System.out.println("nearest pairs are : " + a[ipos] + "," + a[jpos]);
        }

    
	}
}