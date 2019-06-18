// problem link : https://www.hackerrank.com/challenges/common-child/problem
// if you read the question carefully, this is just another variant of Longest common subsequence problem.

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the commonChild function below.
    static int commonChild(String s1, String s2) {
        String[] arrS1 = s1.split("");
        String[] arrS2 = s2.split("");
        int len = s1.length();
        int mat[][] = new int[len+1][len+1];

        for(int i=0;i<=len;i++){
            mat[i][0]=0;
            mat[0][i]=0;
        }


        for(int i=1;i<=len;i++){
            for(int j=1;j<=len;j++){
                if(arrS1[i-1].equals(arrS2[j-1])){
                    mat[i][j]=mat[i-1][j-1]+1;
                }
                else{
                    mat[i][j]=Math.max(mat[i-1][j],mat[i][j-1]);
                }
            }
        }
        
        return mat[len][len];

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s1 = scanner.nextLine();

        String s2 = scanner.nextLine();

        int result = commonChild(s1, s2);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
