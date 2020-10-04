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
        int count = sc.nextInt();
        
        String inputString = sc.next();
        
        int strLen = inputString.length();
        
        Map<Character, ArrayList<Integer>> map = new HashMap<Character,ArrayList<Integer>>();
        
        for (int i=0; i < strLen; i++) {
            Character c = inputString.charAt(i);
            // System.out.print(c);
            
            if(map.containsKey(c)){
                map.get(c).add(i);
            }
            else{
                
                ArrayList<Integer> newList = new ArrayList<Integer>();
                newList.add(i);
                map.put(c,newList);
                
            }
            
        }
        
        // for (Map.Entry<Character,ArrayList<Integer>> entry : map.entrySet())  
        //     System.out.println("Key = " + entry.getKey() + 
        //                      ", Value = " + entry.getValue());
		
		int totalCount=0;
		for(int i=1;i<strLen-1;i++){
            
	        Map<Character,Integer> resultMap = new HashMap<Character,Integer>();
            System.out.println("-------------------");
            
            for(int j=0;j<i;j++){
                

                ArrayList tempList = map.get(inputString.charAt(j));
                // System.out.println(""+tempList);
                int left=0;
                int right=0;
                System.out.println(""+tempList);
                for(int k=0;k<tempList.size();k++){
                    
                    if(Integer.parseInt(tempList.get(k).toString())<i){
                        left++;
                    }
                    else{
                        right++;
                    }
                }
                System.out.println(left+" "+right);
                if(left==right){
                    if(!resultMap.containsKey(inputString.charAt(j))){
                        resultMap.put(inputString.charAt(j),left);
                    }
                }
                
                System.out.println(""+resultMap);
            }
            
            if(resultMap.size()>=count){
                ++totalCount;
                System.out.println("resultmap contains items :"+resultMap.size()+" count till now : "+totalCount);
            }

		}
		
		System.out.println(totalCount);

	}
}
