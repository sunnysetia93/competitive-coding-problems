/*
	Ques. http://practice.geeksforgeeks.org/problems/transform-the-array/0

	by : Sunny Setia
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		
		while((t--)!=0)
		{
		    int n = sc.nextInt();
		    int[] arr = new int[n];
		    
		    for(int i=0;i<n;i++)
		        arr[i]=sc.nextInt();
		    
		    int j=1;
		    int prev=0;
		    while(prev<n-1 && j<n)
		    {
		        while(prev<n-2 && arr[prev]==0)
		            prev++;
		        j=prev+1;
		        while(j<n-1 && arr[j]==0)
		            j++;
		            
		        if(arr[j]==arr[prev])
		        {
		            arr[prev]=2*arr[prev];
		            arr[j]=0;
		        }
		            j++;
		            prev++;
		    }
		    
		    int p=0;
		    for(int i=0;i<n;i++)	//either print directly or create additional array or swap zeroes.
		    {
		        if(arr[i]!=0)
		            System.out.print(arr[i] + " ");
		        else
		            p++;
	        }
	        while(p!=0)
	        {
	            System.out.print("0 ");
	            p--;
	        }
		        
		    System.out.println();
		    
		}
	}
}