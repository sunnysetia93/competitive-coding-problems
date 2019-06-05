// https://www.hackerrank.com/challenges/coin-change/problem
/*
    input : 
        4 3
        1 2 3
    output:
        4
*/
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the getWays function below.
    static long getWays(int n, long[] c) {
        // int num = Math.toIntExact(n);
        long[][] mat = new long[c.length+1][n+1];

        for(int i=0;i<mat.length;i++){
            for(int j=0;j<mat[0].length;j++){
                if(j==0)
                    mat[i][j]=1L;
                else if(i==0)
                    mat[i][j]=0L;
                else if(c[i-1]<=j){
                    int val = Math.toIntExact(c[i-1]);
                    mat[i][j]=mat[i-1][j] + mat[i][j-val];
                    // System.out.println(c[i-1] + " " +  j + " for mat["+i+"]["+j+"] =>" + mat[i][j]);
                }
                else
                    mat[i][j]=mat[i-1][j];
            }
        }

        // System.out.println(mat[0][0] + " " + mat[c.length][num]);
        return mat[c.length][n];

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] nm = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nm[0]);

        int m = Integer.parseInt(nm[1]);

        long[] c = new long[m];

        String[] cItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < m; i++) {
            long cItem = Long.parseLong(cItems[i]);
            c[i] = cItem;
        }

        // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

        long ways = getWays(n, c);
        bufferedWriter.write(String.valueOf(ways));

        bufferedWriter.close();

        scanner.close();
    }
}
