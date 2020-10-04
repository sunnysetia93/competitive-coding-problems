/* Ques. Reverse each word of a String. Eg 'Welcome to Github' reversed is - 'emocleW ot buhtiG' 
    
    By : Sunny Setia
  */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
        Scanner sc = new Scanner(System.in);
        String str = sc.next() + sc.nextLine();
        
        StringTokenizer st = new StringTokenizer(str);
        
        StringBuilder res = new StringBuilder();
        
        while(st.hasMoreTokens())
            res.append(new StringBuilder(st.nextToken()).reverse() + " ");
            
        System.out.println(res);
        
	}
}
