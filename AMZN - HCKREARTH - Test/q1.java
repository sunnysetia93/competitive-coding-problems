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
        
        int N_Range = sc.nextInt();
        int M_queries = sc.nextInt();
        
        ArrayList<Integer> sortedArray = new ArrayList<Integer>();
        
        sortedArray.add(0);
        int i=0,sum=0;
        while(i<M_queries){
            sum=0;
            int val = sc.nextInt();
            sortedArray.add(val);
            Collections.sort(sortedArray);
            
            // System.out.println("-----------------");
            for(int j=1;j<sortedArray.size();j++){
                
                // System.out.println("iteration: " + j + " with size " + sortedArray.size());
                
                //first element & no last element
                if(sortedArray.get(j-1)==0 && (j+1)>=sortedArray.size()){
                    sum += 1 + N_Range;
                    // System.out.println("sum: "+ sum);
                } // first element but has more than one element
                else if(sortedArray.get(j-1)==0 && (j+1)<sortedArray.size()){
                    sum += 1 + (sortedArray.get(j+1)-1);
                    // System.out.println("sum: "+ sum);
                } // last element
                else if(j+1==sortedArray.size()){
                    sum += (sortedArray.get(j-1)+1)+N_Range;
                    // System.out.println("sum: "+ sum);
                } // middle case
                else{
                    sum += (sortedArray.get(j-1)+1) + (sortedArray.get(j+1)-1);
                    // System.out.println("sum: "+ sum);
                }
            }
            
            // System.out.println("total sum: "+ sum);
            System.out.println(sum);
            i++;
        }
        

	}
}
