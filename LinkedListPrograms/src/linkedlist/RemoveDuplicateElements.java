package linkedlist;

/*
 * Remove Duplicate Elements/Nodes from a linkedlist
 * (for implementation of LinkedList Class check LinkedList.java in Current Folder
 *
 * By : Sunny Setia
 * */

import java.util.*;

public class RemoveDuplicateElements {
	
	public RemoveDuplicateElements(LinkedList l)
	{
		HashSet<Integer> map = new HashSet<Integer>();
		
		Node h = l.head;
		Node prev = l.head;
		while(h!=null)
		{
			if(map.contains(h.data))
			{
				prev.next=h.next;
			}
			else
			{
				map.add(h.data);
				prev = h;
			}
			
			h=h.next;
		}
		
	}

	public static void main(String[] args) {
		
		LinkedList list = new LinkedList();
		list.addAtEnd(5);
		list.addAtEnd(5);
		list.addAtEnd(9);
		list.addAtEnd(5);
		list.addAtEnd(9);
		list.addAtEnd(15);
		list.addAtEnd(15);
		list.display();
		
		RemoveDuplicateElements dup = new RemoveDuplicateElements(list);
		System.out.println("After Removing Duplicates :");
		list.display();
		

	}

}
