package linkedlist;

/*
 * Find Kth element from last.
 * (for implementation of LinkedList Class check LinkedList.java in Current Folder
 *
 * By : Sunny Setia
 * */

public class Kth_LastElement {
	
	public Node Kth_LastElement(Linkedlist l,int k)
	{
		Node h = l.head;
		Node fast = l.head;
		
		int count = 0;
		while(count<k)
		{
			if(fast==null)
				return null;
			fast=fast.next;
			count++;
		}
		
		while(fast!=null)
		{
			fast=fast.next;
			h=h.next;
		}
		
		return h;
	}

	public static void main(String[] args) 
	{
		Linkedlist list = new Linkedlist();
		list.addAtBeg(6);
		list.addAtEnd(10);
		list.addAtBeg(1);
		list.addAtBeg(6);
		list.addAtBeg(15);
		list.addAtBeg(60);
		list.display();
		Kth_LastElement element = new Kth_LastElement();
		Node res = element.Kth_LastElement(list, 7);
		if(res==null)
			System.out.println("Out of Bounds - Enter Number within Linked List Range!");
		else
			System.out.println(res.data);
		

	}

}
