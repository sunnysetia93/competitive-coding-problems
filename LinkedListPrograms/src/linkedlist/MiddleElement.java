package linkedlist;

/*
 * Find Middle Element
 * (for implementation of LinkedList Class check LinkedList.java in Current Folder
 *
 * By : Sunny Setia
 * */

public class MiddleElement {

	public Node findMiddleNode(Linkedlist l)
	{
		Node h = l.head;
		
		if(h==null)
			return null;
		
		Node fast=l.head;
		while(fast!=null && fast.next!=null)
		{
			fast=fast.next.next;
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
		list.addAtBeg(0);
		list.display();
		MiddleElement element = new MiddleElement();
		Node res = element.findMiddleNode(list);
		if(res==null)
			System.out.println("Empty List");
		else
			System.out.println(res.data);
		

	}

}
