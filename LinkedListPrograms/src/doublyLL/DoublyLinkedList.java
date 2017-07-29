package doublyLL;

public class DoublyLinkedList {

	public LNode head=null;
	public LNode tail=null;
	
	public void addAtHead(int k,String val)
	{
		LNode n = new LNode(k,val);
		if(head==null && tail==null)
		{
			n.next=head;
			head=n;
			tail=n;
		}
		else
		{
			n.next=head;
			n.prev=null;
			head.prev=n;
			head=n;
		}
	}
	public void addNodeAtHead(LNode n)
	{
		if(head==null && tail==null)
		{
			n.next=head;
			head=n;
			tail=n;
		}
		else
		{
			n.next=head;
			n.prev=null;
			head.prev=n;
			head=n;
		}
	}
	public void addAtTail(int k,String val)
	{
		LNode n = new LNode(k,val);
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
	
	public void remove(LNode curr)
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

		}
	}
	
	public LNode search(int k,String string)
	{
		LNode thead = head;
		
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
		LNode thead=head;
		
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
		LNode x = dll.search(2, "page2");
		System.out.println("searched node->" + x.key);
		dll.remove(x);
		dll.display();

	}

}
