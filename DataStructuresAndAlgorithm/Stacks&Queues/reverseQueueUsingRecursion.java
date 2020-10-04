import java.io.*;
import java.util.*;

class GFG {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		Queue<Integer> queue = new LinkedList<Integer>();
		
		for(int i=1;i<=8;i++)
		    queue.add(i);
		    
		reverseQueue(queue);
		
		for(int i=1;i<=8;i++)
	        System.out.print(queue.remove() + " ");
	}
	
	public static void reverseQueue(Queue<Integer> queue)
	{
	    if(queue.isEmpty())
	        return ;
	       
	   int t = queue.remove();
	   reverseQueue(queue);
	   queue.add(t);
	}
}