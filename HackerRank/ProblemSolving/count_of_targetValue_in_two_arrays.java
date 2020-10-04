/*
    FInd count of pairs in two different arrays whose sum is equal to a target value k
    let a = [1,4,5]
    let b = [3,2,5]
    k = 6
    Ans: 2 i.e. [1,5] & [2,4]
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class Main
{
    private static Scanner sc = new Scanner(System.in);
	public static void main (String[] args) throws java.lang.Exception
	{
		int n = sc.nextInt();
		int[] a = new int[n];
		for(int i=0;i<n;i++){
		    a[i]=sc.nextInt();
		}
		
		int m = sc.nextInt();
		int[] b = new int[m];
		for(int i=0;i<m;i++){
		    b[i]=sc.nextInt();
		}
		int target = sc.nextInt();
		int i=0,j=m-1,count=0;
		Arrays.sort(a);
		Arrays.sort(b);
		
        // System.out.println(i+""+j);
		while(i<n && j>=0){
		    int sum = a[i]+b[j];
		    if(sum==target){
		        count++;
		        i++;
		        j--;
		    }
		    else if(sum>target){
		        j--;
		    }
		    else
		        i++;
		}
		
		System.out.println(count);
		
	}
}
