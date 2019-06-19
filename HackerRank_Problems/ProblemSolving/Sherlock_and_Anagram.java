// problem link:  https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the sherlockAndAnagrams function below.
    static int sherlockAndAnagrams(String s) {
        int len = s.length();
        int count = 0;
        for(int i=1;i<len;i++){
            for(int j=0;j<=len-i-1;j++){
                String first = s.substring(j,j+i);
                for(int k=j+1;k<=len-i;k++){
                    String second = s.substring(k,k+i);
                    // System.out.println(first + " - " + second);
                    count += checkAnagram(first,second);
                }
            }
        }

        return count;
    }
    public static int checkAnagram(String first,String second){
        int[] countCharFirst = new int[26];

        String[] firstSplit = first.split("");
        String[] secondSplit = second.split("");
        
        int firstLen = first.length();

        for(int i=0;i<firstLen;i++){
            int pos = firstSplit[i].charAt(0) - 'a';
            countCharFirst[pos]++;
            int pos1 = secondSplit[i].charAt(0) - 'a';
            countCharFirst[pos1]--;
        }

        for(int i=0;i<26;i++){
            if(countCharFirst[i]>0 || countCharFirst[i]<0)
                return 0;
        }
        return 1;
        
    }
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int qItr = 0; qItr < q; qItr++) {
            String s = scanner.nextLine();

            int result = sherlockAndAnagrams(s);

            bufferedWriter.write(String.valueOf(result));
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
