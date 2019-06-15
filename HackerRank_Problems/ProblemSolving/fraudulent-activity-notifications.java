// problem: https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
// Interesting Problem

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Solution {

    // Complete the activityNotifications function below.
    static int activityNotifications(int[] expenditure, int d) {
        int resultCount=0;
        int len = expenditure.length;
        int[] freq = new int[201];
        for(int i=0;i<d;i++){
            freq[expenditure[i]]++;
        }
        int median=0;
        for(int i=d;i<len;i++){
            if(i==d){
                median = findTwiceOfMedian(freq,d);
                if(expenditure[i]>=median){
                    // System.out.println(sorted + " " + d + " " + median);
                    resultCount++;
                }
            }
            else{
                int newEle = expenditure[i-1];
                freq[newEle]++;
                int removeEle = expenditure[i-d-1];
                freq[removeEle]--;
                median = findTwiceOfMedian(freq,d);
                if(expenditure[i]>=median){
                    // System.out.println(sorted + " " + d + " " + median);
                    resultCount++;
                }
            }
        }

        return resultCount;

    }

    private static int findTwiceOfMedian(int[] freq,int d){
        int freqLen = freq.length;
        if(d%2==0){
            int i=0;
            int count=0;
            int first=-1,second=-1;
            while(i<freqLen){
                count+=freq[i];
                if(count==d/2){
                    first=i;
                }
                else if(count>d/2){
                    if(first==-1)
                        first=i;
                    second=i;
                    
                    return (first+second);    //rather than finding average | sending twice itself.
                }
                i++;
            }
        }
        else{   //odd
            int i=0;
            int count=0;
            while(i<freqLen){
                count+=freq[i];
                if(count>=(d+1)/2){
                    return 2*i;
                }
                i++;
            }
        }

        return 0;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] nd = scanner.nextLine().split(" ");

        int n = Integer.parseInt(nd[0]);

        int d = Integer.parseInt(nd[1]);

        int[] expenditure = new int[n];

        String[] expenditureItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int expenditureItem = Integer.parseInt(expenditureItems[i]);
            expenditure[i] = expenditureItem;
        }

        int result = activityNotifications(expenditure, d);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
