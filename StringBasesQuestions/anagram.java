/* Chcek if two strings are anagrams of each other 
	By : Sunny Setia
*/

import java.io.*;
import java.util.*;

class GFG {
        
    static Scanner sc = new Scanner(System.in);
	public static void main (String[] args) 
	{

        String x;
        String y;
	    int t = sc.nextInt();
	    
	    while(t>0)
	    {
	        HashMap<Character,Integer> hash = new HashMap<Character,Integer>();
	        x = sc.next();
	        y = sc.next();
	        
	        if(x.length()!=y.length())
	        {
	            System.out.println("NO");
	        }
	        else
	        {
	            
	        
    	        for(int i=0;i<x.length();i++)
    	        {
    	            

    	            if(hash.containsKey(x.charAt(i)))
    	            {
    	                int cnt = hash.get(x.charAt(i));

    	                hash.put(x.charAt(i),cnt+1);
    	            }
    	            else
    	            {
                        hash.put(x.charAt(i),1);

    	            }

    	        }
    	        
    	            	        int flag = 0;
    	        for(int i=0;i<y.length();i++)
    	        {
    	            
    	            if(hash.containsKey(y.charAt(i)))
    	            {
    	                int cnt = hash.get(y.charAt(i));

    	                hash.put(y.charAt(i),cnt-1);
    	            }
    	            else
    	            {
    	                flag = 1;
    	            }

    	        }
    	        

    	        
    	        for(Map.Entry<Character,Integer> m : hash.entrySet())
    	        {
    	            int val = m.getValue();
    	            
    	            if(val!=0)
    	            {
    	                flag=1;
    	            }
    	        }
    	        
    	        if(flag==0)
    	        {
    	            System.out.println("YES");
    	        }
    	        else
    	        {
    	            System.out.println("NO");    
    	        }
	        }
	    
	        t--;
	    }
	}
}