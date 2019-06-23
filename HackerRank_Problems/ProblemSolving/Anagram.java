//  link : https://www.hackerrank.com/challenges/anagram/problem
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Anagram {

    // Complete the anagram function below.
    static int anagram(String s) {
        int len = s.length();
        if(len%2!=0)
            return -1;
        String[] splitString = s.split("");
        int[] countChar = new int[26];
        for(int i=0;i<len/2;i++){
            int x = splitString[i].charAt(0) - 'a';
            countChar[x]++;
        }
        for(int i=len/2;i<len;i++){
            int x = splitString[i].charAt(0) - 'a';
            if(countChar[x]!=0)
                countChar[x]--;            
        }
        int res=0;
        for(int i=0;i<26;i++){
            res+=countChar[i];
        }
        return res;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int qItr = 0; qItr < q; qItr++) {
            String s = scanner.nextLine();

            int result = anagram(s);

            bufferedWriter.write(String.valueOf(result));
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
