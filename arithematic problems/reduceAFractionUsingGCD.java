/* Reduce a fraction. 
    calculate gcd of the numerator and denominator
    divide the numerator and denominator with the calculated gcd 
    to reduce the fraction. If numerator or denominator is less than or equal to 0
    print fraction error.
    
    By: Sunny Setia
    */

import java.util.*;
import java.lang.*;
import java.io.*;

class gcd
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
		int m = sc.nextInt();
		int n = sc.nextInt();
		int gcdvalue = reduce(m,n);
		if(gcdvalue!=0)
		{   
            m/=gcdvalue;
	        n/=gcdvalue;
		    System.out.println(m + "/" + n);
		}
		else
		    System.out.println("Fraction Error");
	}
	
	public static int reduce(int m,int n)
	{
	    int gcdvalue = 0;
	    
	    if(m<=0 || n<=0)
	        return 0;
	    
	    if(m==n+1 || n==m+1)
	        gcdvalue=1;
	    else if(m>=n)
	        gcdvalue = calculategcd(m,n);
	    else
	        gcdvalue = calculategcd(n,m);
	   
	    return gcdvalue;
	}
	
	public static int calculategcd(int m,int n)
	{
	    int div = m%n;
	    
	    if(div!=0)
	        return calculategcd(n,div);
	    else
	        return n;
	}
}
