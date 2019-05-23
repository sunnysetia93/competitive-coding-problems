/*
	Ques. There is a collection of N strings ( There can be multiple occurences of a particular string ). 
	Each string's length is no more than 20 characters. There are also Q queries. For each query,
	 you are given a string, and you need to find out how many times this string occurs in the 
	 given collection of N strings.

	 By:Sunny Setia
*/

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();
        ArrayList<String> strings = new ArrayList<String>();
        
        for(int i=0;i<n;i++)
        {
            strings.add(sc.next());
        }
        
        int q = sc.nextInt();
        while((q--)!=0)
        {
            String search = sc.next();
            int cnt=0;
            for(String str : strings)
            {
                if(str.equals(search))
                {
                    cnt++;
                }
            }
            
            System.out.println(cnt);
        }
    }
}