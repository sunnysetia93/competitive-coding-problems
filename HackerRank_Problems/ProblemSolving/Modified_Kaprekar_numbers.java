// https://www.hackerrank.com/challenges/kaprekar-numbers/problem


import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the kaprekarNumbers function below.
    static void kaprekarNumbers(int p, int q) {
        boolean flag = false;
        for(int i=p;i<=q;i++){
            long squared = (long)i*i;
            String squaredStr = String.valueOf(squared);
            String num1 = squaredStr.substring(0,squaredStr.length()/2);
            String num2 = squaredStr.substring(squaredStr.length()/2);
            int numLeft = (num1.isEmpty())?0:Integer.parseInt(num1);
            int numRight = (num2.isEmpty())?0:Integer.parseInt(num2);
            
            if(numLeft+numRight==i){
                System.out.print(i+" ");
                flag=true;
            }
        }

        if(!flag)
            System.out.println("INVALID RANGE");

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int p = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        kaprekarNumbers(p, q);

        scanner.close();
    }
}
