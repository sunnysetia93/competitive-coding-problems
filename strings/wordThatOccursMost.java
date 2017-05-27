/*
    Write a function that takes a single string as input and returns the word that occurs the most,
    ignoring punctuations and case. if more than one words contain some number of occurence, then print the
    one that came first.
    
    Eg : 
        "The cat sat on the mat, with another cat"
        Output : "the"
    
    By: Sunny Setia
*/

import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        
        System.out.println(countWord(s));
		
	}
    
    public static String countWord(String s)
    {
        String a[] = s.replaceAll("[^a-zA-Z ]","").toLowerCase().split("\\s+");
        LinkedHashMap<String,Integer> map = new LinkedHashMap<String,Integer>();
        for(int i=0;i<a.length;i++)
        {
            if(map.containsKey(a[i]))
            {
                int count = map.get(a[i]);
                map.put(a[i],count+1);
            }
            else
            {
                map.put(a[i],1);
            }
        }
        int max = 0;
        String res = new String();
        for(Map.Entry<String,Integer> m : map.entrySet())
        {
            if(max<m.getValue())
            {
                max=m.getValue();
                res=m.getKey();
            }
        }

        return res;
    }
}