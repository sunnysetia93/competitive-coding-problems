//  https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem


import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the climbingLeaderboard function below.
    static int[] climbingLeaderboard(int[] scores, int[] alice) {

        ArrayList<Integer> leaderBoard = new ArrayList<Integer>();
        int[] result = new int[alice.length];
        int val = Integer.MIN_VALUE;
        for(int i=0;i<scores.length;i++){
            if(val!=scores[i]){
                leaderBoard.add(scores[i]);
                val=scores[i];
            }
            
        }
        // System.out.println(leaderBoard);

        int j=leaderBoard.size()-1;
        int i=0;
        int aliceScore = alice[i];
        while(j>=0 && i<alice.length){
            // System.out.println(alice[i]);
            if(alice[i]>leaderBoard.get(j)){
                if(j==0){
                    result[i]=1;
                    i++;
                }
                else{
                    j--;
                }
            }
            else if(alice[i]==leaderBoard.get(j)){
                result[i]=j+1;
                i++;
            }
            else{
                result[i]=j+2;
                i++;
            }
        } 
        return result;

        
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int scoresCount = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] scores = new int[scoresCount];

        String[] scoresItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < scoresCount; i++) {
            int scoresItem = Integer.parseInt(scoresItems[i]);
            scores[i] = scoresItem;
        }

        int aliceCount = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] alice = new int[aliceCount];

        String[] aliceItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < aliceCount; i++) {
            int aliceItem = Integer.parseInt(aliceItems[i]);
            alice[i] = aliceItem;
        }

        int[] result = climbingLeaderboard(scores, alice);

        for (int i = 0; i < result.length; i++) {
            bufferedWriter.write(String.valueOf(result[i]));

            if (i != result.length - 1) {
                bufferedWriter.write("\n");
            }
        }

        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
