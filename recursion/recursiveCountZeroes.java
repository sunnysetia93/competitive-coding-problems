/* Ques. Count number of zeros in an integer. Use Recursion. */

import java.util.*;
import java.lang.*;
import java.io.*;


class recursion
{
	public static void main (String[] args)
	{
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        int count =0;
        if(n!=0)
            count = countZeroes(n);
	    else
	        count=1;
	    
       System.out.println(count);
	}
	
	public static int countZeroes(int n)
	{
	    if(n>0)
	    {
	        if(n%10==0)
	            return 1 + countZeroes(n/10);    
	        return 0 + countZeroes(n/10);
	    }
	    else
	        return 0;
	    
	}
}
