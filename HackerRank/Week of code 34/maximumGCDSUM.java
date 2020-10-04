/*
	Ques.:https://www.hackerrank.com/contests/w34/challenges/maximum-gcd-and-sum/problem

	By:Sunny Setia

*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static int maximumGcdAndSum(int[] A, int[] B,int n) {
        
        Arrays.sort(A);
        Arrays.sort(B);
        
        int sum=0;
        int g=1;
        for(int i=n-1,j=n-1;i>=0;)
        {
            int hcf = gcd(A[i],B[j]);
            if(hcf>g)
            {
                g=hcf;
                int temp=A[i]+B[j];
                sum=temp;
                j--;
                if(j==0)
                {
                    i--;
                    j=n-1;
                }
            }
            else if(hcf==g)
            {
                g=hcf;
                int temp=A[i]+B[j];
                sum = temp>sum?temp:sum;
                j--;
                if(j==0)
                {
                    i--;
                    j=n-1;
                }
                
            }
            else
            {
                i--;
                j=n-1;
            }
            
        }
        return sum;
    }
    
    static int gcd(int a,int b)
    {
        if(a==b+1 || b==a+1 || a<=0 || b<=0)
            return 1;
        if(a==b)
            return a;

        int max = (a>b)?a:b;
        int min = (a<b)?a:b;
        
        while(true)
        {
            int rem = max%min;
            if(rem==0)
            {
                return min;
            }
            else
            {
                max=min;
                min=rem;
            }
            
        }
    }

    public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int[] A = new int[n];
    for(int A_i = 0; A_i < n; A_i++){
        A[A_i] = in.nextInt();
    }
    int[] B = new int[n];
    for(int B_i = 0; B_i < n; B_i++){
        B[B_i] = in.nextInt();
    }
    int res = maximumGcdAndSum(A,B,n);
    System.out.println(res);
    }
}
