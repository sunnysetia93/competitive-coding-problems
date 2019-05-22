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
		
		String s = sc.next();
		
	    Map<Character,Integer> MapRooms = new HashMap<Character,Integer>();
	    
		int rooms = sc.nextInt();
		int availableRooms = rooms;
		
		while(rooms!=0){
		    
		    int rejectedCount=0;
    	    for(int i=0;i<s.length();i++){
    	        char c = s.charAt(i);
	            MapRooms.put(c,-1);
    	    }
    	    for(int i=0;i<s.length();i++){
	           // System.out.println(""+MapRooms);
	            
	            char c = s.charAt(i);
	            int roomStatus = MapRooms.get(c);
	            if(roomStatus==1){
	               availableRooms++;
	               MapRooms.remove(c);
	            }
	            else if(availableRooms!=0 && (roomStatus==-1)){
	                availableRooms--;
	                MapRooms.put(c,1);
	            }
	            else if(availableRooms<=0 && roomStatus==-1){
	                    MapRooms.put(c,0);
	            }
	            else if(availableRooms<=0 && roomStatus==0){
	               // availableRooms--;
                    rejectedCount++;
	                MapRooms.remove(c);
	            }
    	        else if(availableRooms!=0 && roomStatus==0){
    	            availableRooms--;
    	            MapRooms.put(c,1);
    	        }
		    }
    	    System.out.println(rejectedCount);
		    rooms=sc.nextInt();
		    availableRooms = rooms;
	    }
	}
}
