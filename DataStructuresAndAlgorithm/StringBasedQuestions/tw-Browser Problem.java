/* Question : https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/the-best-internet-browser-3/ */
// By Sunny Setia

import java.util.*;

class TestClass {
    public static void main(String args[] ) throws Exception {

        Scanner s = new Scanner(System.in);
        int N = s.nextInt();

        for (int i = 0; i < N; i++) 
        {
                
            String x = s.next();
            char st[]=x.toCharArray();
            int vowelcount=0;
            for(int j=0;j<x.length();j++)
            {
                if(st[j]=='a' || st[j]=='e' || st[j]=='i' || st[j]=='o' || st[j]=='u')
                {
                    vowelcount++;
                }
            }

            int b = x.length()-vowelcount-4+1;
            System.out.println(b+"/"+x.length());
        }
        

    }
}