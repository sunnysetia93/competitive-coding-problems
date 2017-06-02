/* Check if two strings are permutations of each other.
    
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
        String one = sc.nextLine();
        String second = sc.nextLine();
        
        System.out.println(checkPermutation(one,second)?"Yes":"No");
	}
	
	public static boolean checkPermutation(String one,String second)
	{
	    if(one.length()!=second.length())
	        return false;
	        
	    int count[] = new int[128]; //ASCII String
	    
	    for(char c : one.toCharArray())
	        count[c]++;
	    
	    for(char c : second.toCharArray())
	    {
	        count[c]--;
	        
	        if(count[c]<0)
	            return false;
	    }
	    
	    
	    return true;
	    
	    
	}
}
