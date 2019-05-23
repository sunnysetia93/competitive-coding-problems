/*
    Reverse String as well as reverse each word.
    eg: "Welcome to Github.com
    Output : "moc.buhtiG ot emocleW"
    
    By: Sunny Setia
*/

import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        
        System.out.println(ReverseString(s));
		
	}
    
    public static StringBuilder ReverseString(String s)
    {
        String a[] = s.split("\\s");
        StringBuilder sb = new StringBuilder();
        for(int i=a.length-1;i>=0;i--)
        {
            
            sb.append((new StringBuilder(a[i])).reverse() + " ");
        }
            
        return sb;
    }
}