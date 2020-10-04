/*
    Question from HackerRank : https://www.hackerrank.com/challenges/separate-the-numbers

    By: Sunny Setia
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int q = in.nextInt();
        for(int a0 = 0; a0 < q; a0++){
            String s = in.next();
            boolean valid=false;
            long first=0;
            
            for(int i=1;i<=s.length()/2;i++)
            {
                long x = Long.parseLong(s.substring(0,i));
                String test = s.substring(0,i);
                first = x;
                valid = false;
                
                while(test.length() < s.length())
                {
                    test += ++x;
               
                }
                
                if(test.equals(s))
                {
                    valid=true;
                    break;
                }    
            }
            System.out.println(valid==true?("YES " + first):"NO");
        }
    }
}
