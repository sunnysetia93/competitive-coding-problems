import java.util.*;
import java.lang.*;
import java.io.*;
class Solution
 {
    public static Scanner sc = new Scanner(System.in);
	public static void main (String[] args){
        int t= sc.nextInt();
        while((t--)>0){
            int n = sc.nextInt();
            int k = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++)
                arr[i]=sc.nextInt();

            int sum = 0;
            int i=0;
            for(i=0;i<k;i++)
                sum+=arr[i];
            int max = sum;

            int count =0;
            for(;i<n;i++){
                sum += arr[i] - arr[i-k];
                max = Math.max(sum,max);             
            }

            System.out.println(max);
        }   
	 }
}