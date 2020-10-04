package linkedlist;

/*
 *  Ques. Append the last n elements of a linked list to the front.
 * e.g. for 1-> 2-> 3 -> 4 -> 5 -> 6-> null and n = 2 return 5->6->1->2->3->4->null
 * 
 *  By: Sunny Setia
 */

public class AppendLastNAtHead {
	
	public AppendLastNAtHead(Linkedlist list,int n)
	{
		Node fast = list.head;
		Node slow = list.head;
		Node fastPrev = null;
		while(fast!=null && (n--)>0)	
		{
			fastPrev=fast;
			fast=fast.next;
		}
		
		while(fast.next!=null)	// gives prev of n last and last node
		{
			fast=fast.next;
			slow=slow.next;
		}
		
		fast.next=list.head;
		list.head=slow.next;
		slow.next=null;
	}

	public static void main(String[] args) {
		
		Linkedlist list = new Linkedlist();
		list.addAtEnd(10);
		list.addAtBeg(1);
		list.addAtBeg(6);
		list.addAtEnd(15);
		list.addAtEnd(4);
		list.addAtEnd(14);
		list.addAtEnd(17);
		list.display();
		
		AppendLastNAtHead app = new AppendLastNAtHead(list,3);
		list.display();
		
		

	}

}
