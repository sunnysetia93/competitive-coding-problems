// https://practice.geeksforgeeks.org/problems/sum-of-numbers-in-string/0

import java.util.*;
import java.util.regex.*;
import java.lang.*;
import java.io.*;
class Solution
 {
     public static Scanner sc = new Scanner(System.in);
	public static void main (String[] args)
	 {
	  int t = sc.nextInt();
	  
	  while((t--)>0){
        String s = sc.next();
 
        String delimiter =  "\\d+"; 
        Pattern pattern = Pattern.compile(delimiter); 
        Matcher m = pattern.matcher(s);
        
        int sum=0;
        while(m.find()) {
            sum+=Integer.parseInt(m.group());
        }
        System.out.println(sum);
	  }
	 }
}