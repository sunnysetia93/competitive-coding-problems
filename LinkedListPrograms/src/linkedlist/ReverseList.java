package linkedlist;

public class ReverseList {
	
	public ReverseList(Linkedlist l)
	{
		Node curr = l.head;
		Node prev = null;
		Node nex = null;
		
		while(curr!=null)
		{
			nex=curr.next;
			curr.next=prev;
			prev=curr;
			curr=nex;
		}
		
		l.head=prev;

	}

	public static void main(String[] args) {
		
		Linkedlist list = new Linkedlist();
		list.addAtEnd(10);
		list.addAtBeg(1);
		list.addAtBeg(6);
		list.addAtEnd(15);
		list.display();
		
		ReverseList reverse = new ReverseList(list);
		list.display();
	}

}
