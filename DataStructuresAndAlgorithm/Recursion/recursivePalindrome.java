/* check if Palindrome Recursively !*/

import java.util.*;
import java.lang.*;
import java.io.*;

class Palindrome
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		
		boolean res = checkPalindrome(str);
		
		if(res==false)
		    System.out.println("Not Palindrome!");
	    else
            System.out.println("Palindrome!");
	}   
	
	public static boolean checkPalindrome(String s)
	{
	    if(s.length()<=1)
	        return true;

        boolean palin = checkPalindrome(s.substring(1,s.length()-1));
        
        if(palin==true && s.charAt(0)==s.charAt(s.length()-1))
            return true;

        return false;
	}
}
