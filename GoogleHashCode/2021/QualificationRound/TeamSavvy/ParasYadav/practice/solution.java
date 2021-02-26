package practice;/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
// import java.math.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */

public class solution {

    public static void main(String[] args) throws java.lang.Exception {
        // your code goes here
        try {
            BufferedReader br = new BufferedReader(new FileReader("a_example.txt"));
            PrintWriter ot = new PrintWriter("output_a.txt");
            String q[] = br.readLine().trim().split(" ");
            int m = Integer.parseInt(q[0]);
            int t2 = Integer.parseInt(q[1]);
            int t3 = Integer.parseInt(q[2]);
            int t4 = Integer.parseInt(q[3]);
            int qq = m;
            while (qq-- > 0) {
                String s[] = br.readLine().trim().split(" ");
                // int n=Integer.parseInt(s[0]);
            }
            StringBuilder sb = new StringBuilder("");
            int count = 0;
            int x = 0;
            while (t2 > 0 && m >= 2) {
                count++;
                sb.append("2 " + x + " " + (x + 1) + "\n");
                x += 2;
                t2--;
                m -= 2;
            }
            while (t3 > 0 && m >= 3) {
                count++;
                sb.append("3 " + x + " " + (x + 1) + " " + (x + 2) + "\n");
                x += 3;
                t3--;
                m -= 3;
            }
            while (t4 > 0 && m >= 4) {
                count++;
                sb.append("4 " + x + " " + (x + 1) + " " + (x + 2) + " " + (x + 3) + "\n");
                x += 4;
                t4--;
                m -= 4;
            }

            ot.println(count);
            ot.println(sb.toString());
            ot.close();
            br.close();
        }
        catch (Exception e) {
            e.printStackTrace();
            return;
        }
    }
}
    