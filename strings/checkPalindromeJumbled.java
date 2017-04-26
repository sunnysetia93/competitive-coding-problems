/* Check if palindrome can be formed from a string if jumbled 
By : Sunny Setia
*/

import java.io.*;
import java.util.*;
import java.util.Map;
class GFG {
    
    static Scanner sc = new Scanner(System.in);
	public static void main (String[] args) {
        int t;
        String s = new String(sc.next());
        
        HashMap<Character,Integer> map = new HashMap<Character,Integer>();
        
        for(int i=0;i<s.length();i++)
        {
            if(map.containsKey(s.charAt(i))==true)
            {
                int cnt = map.get(s.charAt(i));
                
                map.put(s.charAt(i),cnt+1);
            }
            else
            {
                map.put(s.charAt(i),1);
            }
        }
        
        int odd=0;
        for(Map.Entry<Character,Integer> m : map.entrySet())
        {
            if(m.getValue()%2!=0)
            {
                odd++;
            }
        }
        
        if(odd<=1)
        {
            System.out.println("YES");
        }
        else
        {
            System.out.println("NO");
        }
	}
}