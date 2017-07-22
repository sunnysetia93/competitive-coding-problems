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
	
	public void remove(Node curr)
	{
		if(curr==head)
		{
			head=head.next;
			head.prev=null;
		}
		else if(curr==tail)
		{
			tail=tail.prev;
			tail.next=null;
		}
		else
		{
			curr.prev.next=curr.next;
			curr.next.prev=curr.prev;
			curr.next=null;
			curr.prev=null;
		}
	}
	
	public Node search(int k,String string)
	{
		Node thead = head;
		
		if(thead.key==k && thead.value.equals(string))
		{
			return thead;
		}
		else if(tail.key==k && tail.value.equals(string))
		{
			return tail;
		}
		else
		{
			while(thead!=null)
			{
				if(thead.key==k && thead.value.equals(string))
				{
					return thead;
				}
				thead=thead.next;
			}
		}
		
		return null;
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
		Node x = dll.search(2, "page2");
		System.out.println("searched node->" + x.key);
		dll.remove(x);
		dll.display();

	}

}
