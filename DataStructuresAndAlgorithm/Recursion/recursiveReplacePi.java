/* Given a string, compute recursively (no loops) a new string where all appearances of
    "pi" have been replaced by "3.14".
    changePi("xpix") → "x3.14x"
    changePi("pipi") → "3.143.14"
    changePi("pip") → "3.14p    
    
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
		
	    str = replacePi(str);
	    System.out.println(str);
	    
	}
	
	public static String replacePi(String s)
	{
	    if(s.length()<1)
	        return "";
	    
	    if(s.length()==1)
	        return s.charAt(0)+"";
	    
	    if(s.charAt(0)=='p' && s.charAt(1)=='i')
	    {
	        return "3.14" + replacePi(s.substring(2));
	    }
	    else
	    {
	        return s.charAt(0) + replacePi(s.substring(1));
	    }
	}
}
