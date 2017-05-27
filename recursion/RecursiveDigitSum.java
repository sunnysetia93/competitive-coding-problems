/*
	Sum the digits for the number n, sum until number is single digit.
		eg. n=1546
			1 + 5 + 4 + 6 = 16
			1 + 6 = 7

			answer = 7

	By: Sunny Setia
*/

import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
// 		System.out.println(digitSum(n)); //Iterative Solution

		System.out.println(digitSumRecursive(n));	//Recursive Solution
		
	}
	
	public static int digitSumRecursive(int n)
	{
	    int sum=0;
	    int num=n;
	    
        while(num!=0)
        {
            sum+=num%10;
            num/=10;
        }
        
        if(sum>=10)
            return digitSumRecursive(sum);
        else
            return sum;
	}

	public static int digitSum(int n)
	{
	    int sum=0;
	    while(n!=0)
	    {
	        sum+=n%10;
	        n/=10;
	        
	        if(n==0 && sum>=10)
	        {
	            n=sum;
	            sum=0;
	        }
	    }
	    
	    return sum;
	}
}