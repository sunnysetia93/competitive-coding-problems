// Problem link: https://www.hackerrank.com/challenges/dynamic-programming-classics-the-longest-common-subsequence/problem

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the longestCommonSubsequence function below.
    static int[] longestCommonSubsequence(int[] a, int[] b) {

        int[][] mat = new int[a.length+1][b.length+1];

        for(int i=1;i<mat.length;i++){
            for(int j=1;j<mat[0].length;j++){
                if(a[i-1]==b[j-1]){
                    mat[i][j]=mat[i-1][j-1]+1;
                }
                else{
                    mat[i][j]=Math.max(mat[i-1][j],mat[i][j-1]);
                }
            }
        }

        int commonLength = mat[a.length][b.length];

        int[] result = new int[commonLength];

        int i=a.length;
        int j=b.length;
        int resultIndex=0;
        while(i>0 && j>0){
            if(mat[i][j]==mat[i][j-1]){
                j--;
            }
            else if(mat[i][j]!=mat[i][j-1] && mat[i][j]!=mat[i-1][j]){
                result[resultIndex++]=a[i-1];
                i--;
                j--;
            }
            else{
                i--;
            }
        }  
        int t=0;
        for (i = 0; i < commonLength / 2; i++) { 
            t = result[i]; 
            result[i] = result[commonLength - i - 1]; 
            result[commonLength - i - 1] = t; 
        }              

        return result;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] nm = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nm[0]);

        int m = Integer.parseInt(nm[1]);

        int[] a = new int[n];

        String[] aItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int aItem = Integer.parseInt(aItems[i]);
            a[i] = aItem;
        }

        int[] b = new int[m];

        String[] bItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < m; i++) {
            int bItem = Integer.parseInt(bItems[i]);
            b[i] = bItem;
        }

        int[] result = longestCommonSubsequence(a, b);

        for (int i = 0; i < result.length; i++) {
            bufferedWriter.write(String.valueOf(result[i]));

            if (i != result.length - 1) {
                bufferedWriter.write(" ");
            }
        }

        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
