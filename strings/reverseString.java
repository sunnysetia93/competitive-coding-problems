/* Ques. Reverse String word wise. Eg 'Welcome to Github' reversed is - 'Github to Welcome ' 
    
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
        String st[] = (sc.next() + sc.nextLine()).split("\\s");
        StringBuilder res = new StringBuilder();
        
        for(int i=st.length-1;i>=0;i--)
            res.append(st[i] + " ");
            
        System.out.println(res);
        
	}
}
