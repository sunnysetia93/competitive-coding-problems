/*      Ques. Take a String input from user and print the String without printing the
              consecutive duplicates For example, for input "aabccba" print "abcba" 
              
            By: Sunny Setia
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class practice
{
	public static void main (String[] args) throws java.lang.Exception
	{
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        System.out.println(removeDuplicates(str));
	}
	
	public static StringBuilder removeDuplicates(String s)
	{
	    StringBuilder str = new StringBuilder();
	    for(int i=1;i<s.length();i++)
	    {
            while(s.charAt(i-1)==s.charAt(i) && i<s.length()-1)
            {
                i++;
            }
            if(s.charAt(i-1)!=s.charAt(i) && i<s.length())
            {
                str.append(s.charAt(i-1));
            }
            else
            {
                str.append(s.charAt(i));
            }
	    }
        if(s.charAt(s.length()-2)!=s.charAt(s.length()-1))
        {
            str.append(s.charAt(s.length()-1));
        }
	    
	    return str;
	}
}
