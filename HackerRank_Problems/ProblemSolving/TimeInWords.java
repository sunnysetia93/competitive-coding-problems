import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the timeInWords function below.
    static String timeInWords(int h, int m) {

        String result = "";
        String hourInWords = "";

        if(m<=30){
            hourInWords = numInWords(h);
            if(m==0)
                result+=hourInWords+" o' clock";
            else if(m==1)
                result+=numInWords(m) + " minute past " + hourInWords;
            else if(m==15)
                result+= "quarter past " + hourInWords;
            else if(m==30)
                result += "half past " + hourInWords;
            else
                result += numInWords(m) + " minutes past " + hourInWords;
        }
        else{
            if(h==12)
                hourInWords = numInWords(1);
            else 
                hourInWords = numInWords(h+1);

            if(m==45)
                result+= "quarter to " + hourInWords;
            else
                result += numInWords(60-m) + " minutes to " + hourInWords;
        }
        return result;
    }

    static String numInWords(int n){
        String[] numbers = new String[]{
            "zero", 
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
            "twenty",
            "twenty one",
            "twenty two",
            "twenty three",
            "twenty four",
            "twenty five",
            "twenty six",
            "twenty seven",
            "twenty eight",
            "twenty nine"
        };

        return numbers[n];
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int h = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int m = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        String result = timeInWords(h, m);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
