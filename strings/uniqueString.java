/* Check if string contains unique characters.
    Assuming lowercase alphabet string.
    
    By: Sunny Setia
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class UniqueCheck
{
	public static void main (String[] args) throws java.lang.Exception
	{
        Scanner sc = new Scanner(System.in);
        String str = sc.next().toLowerCase();
        boolean isDistinct = true;
        
        boolean charCount[] = new boolean[26];
        
        for(char c : str.toCharArray())
        {
            int val = (c-97)%26;
            if(charCount[val]==true)
            {
                isDistinct=false;
                break;
            }
            
            charCount[val]=true;
        }
        
        
        System.out.println(isDistinct==true?"Unique":"Not Unique");
	}
}
