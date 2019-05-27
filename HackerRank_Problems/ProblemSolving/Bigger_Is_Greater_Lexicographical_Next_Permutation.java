// problem link: https://www.hackerrank.com/challenges/bigger-is-greater/problem

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the biggerIsGreater function below.
    static String biggerIsGreater(String w) {
        int[] arr = new int[w.length()];
        for(int i=0;i<w.length();i++){
            arr[i]=w.charAt(i)-96;
        }
        arr = nextPermutation(arr);
        if(arr==null){
            return "no answer";
        }
        else{
            String res = "";
            for(int i=0;i<arr.length;i++){
                res+=(char) (arr[i] + 'a' - 1);
            }
            return res;
        }
    }

    static int[] nextPermutation(int[] arr){
        int i=arr.length-1;
        while(i>0 && arr[i-1]>=arr[i])
            i--;
        
        if(i<=0)
            return null;
        
        // arr[i-1] is pivot

        int j=arr.length-1;

        while(arr[j]<=arr[i-1])
            j--;
        
        int temp = arr[j];
        arr[j]=arr[i-1];
        arr[i-1]=temp;

        j=arr.length-1;

        while(i<j){

            int t = arr[i];
            arr[i]=arr[j];
            arr[j]=t;
            i++;
            j--;
        }

        // System.out.println(arr+"");
        return arr;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int T = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int TItr = 0; TItr < T; TItr++) {
            String w = scanner.nextLine();

            String result = biggerIsGreater(w);

            bufferedWriter.write(result);
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
