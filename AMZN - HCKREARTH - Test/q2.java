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
        
        int N_vertices = sc.nextInt();
        int Q_queries = sc.nextInt();
        int M_edges = N_vertices - 1;
        int maxDepth=0;
        
        ArrayList<Integer> A_array = new ArrayList<Integer>();
        HashMap<Integer,Integer> Map = new HashMap<Integer,Integer>();
        
        Map.put(1,0);
        
        int i = 0;
        while(i<N_vertices){
            A_array.add(sc.nextInt());
            i++;
        }
        
        i=0;
        while(i<M_edges){
            
            int a_edge = A_array.get(sc.nextInt()-1);
            int b_edge = A_array.get(sc.nextInt()-1);
            
            Map.put(b_edge,Map.get(a_edge)+1);
            
            if(Map.get(a_edge)+1>maxDepth){
                maxDepth=Map.get(a_edge)+1;
            }
            
            i++;
        }
        
        
        i=0;
        while(i<Q_queries){
            int L = sc.nextInt();
            int X = sc.nextInt();
            
            int level = L%(maxDepth+1);
            
    		int smallest = Integer.MAX_VALUE;
    		for (Map.Entry<Integer,Integer> entry : Map.entrySet()) {

    			if (entry.getValue().equals(level)){
                    
    				if(entry.getKey()>=X && smallest>=entry.getKey()){
    				    smallest=entry.getKey();
    				}
    			}
    		}
    		
    		if(smallest==Integer.MAX_VALUE)
    		    System.out.println(-1);
    		else
                System.out.println(smallest);
            i++;
        }
        
        
	}
}
