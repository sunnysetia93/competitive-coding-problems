/* Given k find the geometric Sum i.e. 1 + 1/2 + 1/4 + 1/8 + ... + 1/(2^k) 
    By : Sunny Setia
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class recursion
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		double sum=0.0; 
		if(n>=1)
		    sum = geometricSum(n);
		    
		 System.out.println(sum);
		    
	}
	
	public static double geometricSum(double n)
	{
	    if(n==0)
	        return 1;
	 
	    return (1/Math.pow(2,n)) + geometricSum(n-1);    
	    
	}
}
