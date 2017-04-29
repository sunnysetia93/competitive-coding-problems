/*
    Ques. Multiple two numbers m & n using only addition & subtraction. Use Recursion.
    
    By: Sunny Setia
*/

import java.io.*;
import java.util.*;

class recursion {
	
	public static void main (String[] args) {
	    
	    Scanner sc = new Scanner(System.in);
	    int a = sc.nextInt();
	    int b = sc.nextInt();
	    int count=0;
	    
        count = recursiveMultiply(a,b);
        
        System.out.println(count);    
		
	}
	public static int recursiveMultiply(int a,int b)
	{
	    if(b==0)
	        return 0;
	    else if(b<0)
	        return -a + recursiveMultiply(a,b+1);
	    else
	        return a + recursiveMultiply(a,b-1);
	}
}