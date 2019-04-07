/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        // System.out.println(testCases);
		
		while(testCases-->0){
		    int n = sc.nextInt();
		    int[] blocks = new int[n];
		    int[] steps = new int[n];
		    
		  //  int[] result = new int[n];
		    ArrayList<Integer> result = new ArrayList<Integer>(n);
		    
		    for(int i=0;i<n;i++){
		        blocks[i]=sc.nextInt();    
		    }
		    for(int i=0;i<n;i++){
		        steps[i]=sc.nextInt();    
		    }
		    
    // 	    for(int i=0;i<n;i++){
		  //      System.out.print(blocks[i]);
		  //      System.out.println(steps[i]);
		  //  }
		  
		    for(int i=0;i<n;i++){
		        
                //  steps[i]=sc.nextInt();  
                int newVal = blocks[i];
                // System.out.println("new value: "+ newVal);
                // System.out.println("result size: "+ result.size());
                
                
                if(result.size()==0){
                  result.add(newVal);
                }
                else{
                  int j=0;
                  for(;j<result.size();j++){
                      
                      if(newVal<=result.get(j)){
                        //   System.out.println("adding " + newVal + " at position "+ j);
                          result.add(j,newVal);
                          j=result.size();
                      }
                  }
                if(j==result.size()){
                          result.add(newVal);
                      }
                }
                
                System.out.printf("%s ", result.get(steps[i]-1));
		    }
		    

		    
		}
	}
}
