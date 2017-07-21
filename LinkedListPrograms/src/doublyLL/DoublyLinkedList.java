package doublyLL;

public class DoublyLinkedList {

	Node head=null;
	Node tail=null;
	
	public void addAtHead(int k,String val)
	{
		Node n = new Node(k,val);
		if(head==null && tail==null)
		{
			head=n;
			tail=n;
		}
		else
		{
			n.next=head;
			head=n;
		}
	}
	public void addAtTail(int k,String val)
	{
		Node n = new Node(k,val);
		if(head==null && tail==null)
		{
			head=n;
			tail=n;
		}
		else
		{
			tail.next=n;
			n.prev=tail;
			tail=n;
		}
	}
	
	public void display()
	{
		Node thead=head;
		
		if(thead==null)
		{
			System.out.println("Empty!");
			return;
		}
		while(thead!=null)
		{
			System.out.print(thead.key + "[" + thead.value + "]->");
			thead=thead.next;
		}
		System.out.println();
	}
	
	public static void main(String[] args) {
		DoublyLinkedList dll = new DoublyLinkedList();
		dll.addAtHead(1, "page1");
		dll.addAtHead(2, "page2");
		dll.addAtTail(3, "page3");
		dll.display();

	}

}
