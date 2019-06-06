/*
    Problem : https://www.geeksforgeeks.org/subset-sum-problem-dp-25/ 
    input: 
            8
            1 2 5 7
    ouput:
            Yes
*/
import java.util.*;
import java.lang.*;
import java.io.*;

class Solution
{
    private static final Scanner sc = new Scanner(System.in);

	public static void main (String[] args) throws java.lang.Exception
	{
	    String nm = sc.nextLine();
	    int sum = Integer.parseInt(nm);
	    String[] arrValues = sc.nextLine().split(" ");
	    sc.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
	    int[] values = new int[arrValues.length];
	    
	    for(int i=0;i<arrValues.length;i++){
	        int val = Integer.parseInt(arrValues[i]);
	        values[i]=val;
	    }
	    
	    boolean isSubsetPresent = subsetSum(values,sum); 
	    
	    String res = isSubsetPresent==true?"Yes":"No";
	    System.out.println(res);
	    sc.close();
	}
	
	public static boolean subsetSum(int[] values,int sum){
	    
	    boolean[][] mat = new boolean[values.length+1][sum+1];
	    
	    for(int i=0;i<mat.length;i++){
	        for(int j=0;j<mat[0].length;j++){
	            if(i==0 && j==0)
	                mat[i][j]=true;
	            else if(i==0)
	                mat[i][j]=false;
	            else if(values[i-1]>j){
	                mat[i][j]=mat[i-1][j];
	            }
	            else{
	                mat[i][j]=mat[i-1][j] || mat[i-1][j-values[i-1]];
	            }
	        }
	    }
	    
	    return mat[values.length][sum];
	}
}
