import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Solution {

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        StringBuffer[] count = new StringBuffer[100];
        for(int i=0;i<n;i++){
            String input=bufferedReader.readLine();
            String[] inputStr=input.split("[\\s]+");
            int pos = Integer.parseInt(inputStr[0]);
            String val = inputStr[1];
            String s;
            if(i<n/2)
                s="- ";
            else
                s=val+" ";
            if(count[pos] == null) 
                count[pos] = new StringBuffer();
            count[pos].append(s);
        }
        for(int i=0;i<100;i++){
            if(count[i] != null)
                System.out.print(count[i]);
        }

        bufferedReader.close();
    }
}
