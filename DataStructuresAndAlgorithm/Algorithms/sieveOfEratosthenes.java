/* 
    Ques. Algorithm : Sieve Of Eratosthenes 

        To find all prime numbers till number "n" in O(n) time.
    
    By : Sunny Setia
  
  */

import java.util.*;
import java.lang.*;
import java.io.*;

class sieveOfEratosthenes
{
	public static void main (String[] args) throws java.lang.Exception
	{
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt()+1;
        boolean arr[] = findPrimeNumbers(n);
        
        for(int i=2;i<n;i++)
        {
            if(arr[i]==true)
            {
                System.out.print(i+" ");
            }
        }
	}
	
	public static boolean[] findPrimeNumbers(int n)
	{
	    boolean[] a = new boolean[n];
	    
	    for(int i=0;i<n;i++)
	        a[i]=true;
        
	    int i=2;	    
	    while(i*i<=n)
	    {
	        if(a[i]==true)
	        {
	            for(int j=2*i;j<n;j+=i)
	                a[j]=false;
	        }
	        i++;
	    }
	    
	    return a;
	}
}
