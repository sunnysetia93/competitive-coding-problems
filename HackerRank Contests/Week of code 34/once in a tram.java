/*
	Ques. https://www.hackerrank.com/contests/w34/challenges/once-in-a-tram/problem

	By: Sunny Setia
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static int onceInATram(int x) {
        
        int lastPart = x%1000;
        int firstPart = (x/1000);
        
        int countFirst = countDigits(firstPart);
        int countLast = countDigits(lastPart);
        
        int expectedSum = countFirst*2;
        
        int firstLastSum = countFirst + countLast;
        
        int diff = expectedSum - firstLastSum;
        
        if(diff<0)
        {
            int temp = x+1;
            int l = countDigits(temp%1000);
            int f = countDigits(temp/1000);
            int t=l+f;
            while(f!=l)
            {
                temp++;
                l = countDigits(temp%1000);
                f = countDigits(temp/1000);
                t=l+f;
                
            }
            return temp;
        }
        else if(diff==0)
        {
            return x+9;
        }
        
        while((diff--)!=0)
        {
            x++;
        }
        
        return x;
    }
    
    static int countDigits(int n)
    {
        int cnt=0;
        while(n>0)
        {
            cnt=cnt+n%10;
            n/=10;
        }
        
        return cnt;
    }

    public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int x = in.nextInt();
    int result = onceInATram(x);
    System.out.println(result);
    }
}
