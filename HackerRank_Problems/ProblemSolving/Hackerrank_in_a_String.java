// problem link : https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the hackerrankInString function below.
    static String hackerrankInString(String str) {
        String matchString = "hackerrank";
        int len=matchString.length();
        int j=0;
        for(int i=0;i<str.length() && j<matchString.length();i++){
            char mChar = matchString.charAt(j);
            char c = str.charAt(i);
            if(c==mChar){
                j++;
            }
        }
        String res = j==len?"YES":"NO";  
        return res;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int qItr = 0; qItr < q; qItr++) {
            String s = scanner.nextLine();

            String result = hackerrankInString(s);

            bufferedWriter.write(result);
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
