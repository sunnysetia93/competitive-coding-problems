/* Given a string, compute recursively a new string where all the 'x' chars have been
    removed.
    noX("xaxb") → "ab"
    noX("abc") → "abc"
    noX("xx") → ""  
    
    By:Sunny Setia
    
    */

import java.util.*;
import java.lang.*;
import java.io.*;


class recursion
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		
	    str = replaceX(str);
	    System.out.println(str);
	    
	}
	
	public static String replaceX(String s)
	{
	    if(s.length()<1)
	        return "";
	    
	    if(s.charAt(0)=='x' || s.charAt(0)=='X')
	        return "" + replaceX(s.substring(1));
	    else
	        return s.charAt(0) + replaceX(s.substring(1));
	}
}
