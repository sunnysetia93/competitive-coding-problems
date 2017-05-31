/*
    Ques. To check if Pangram

    By: Sunny Setia
*/
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().toLowerCase();

        int[] alpha = new int[26];
        
        for(int i=0;i<s.length();i++)
        {
            if(Character.isLetter(s.charAt(i)))
            {
                int ascii = (int)s.charAt(i);
                alpha[(ascii-97)%26]++;
            }
        }
        boolean isPangram = true;
        for(int i=0;i<26;i++)
        {   
            if(alpha[i]<=0)
            {
                isPangram = false;
                break;
            }
        }
        
        if(isPangram==false)
            System.out.println("not pangram");
        else
            System.out.println("pangram");
        
        
    }
}