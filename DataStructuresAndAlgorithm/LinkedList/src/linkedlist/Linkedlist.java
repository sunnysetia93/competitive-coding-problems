package linkedlist;

class Node
{
	int data;
	Node next;
	
	Node(int d)
	{
		data=d;
		next=null;
	}
}
public class Linkedlist 
{
	public Node head=null;
	
	public void display()
	{
		Node h = head;
		if(head==null)
		{	System.out.println("Empty List!");
			return;
		}
		while(h!=null)
		{
			System.out.print(h.data+"->");
			h=h.next;
		}
		System.out.println();
	}
	
	public void addAtEnd(int d)
	{
		
		if(head==null)
		{
			head=new Node(d);
		}
		else
		{
			Node h=head;
			while(h.next!=null)
			{
				h=h.next;
			}
			h.next=new Node(d);
		}
	}
	
	public void addAtBeg(int d)
	{
		if(head==null)
			head = new Node(d);
		else
		{
			Node temp = new Node(d);
			temp.next=head;
			head=temp;
		}
	}
	
	public void delFromPosition(int p)
	{
		if(head==null)
		{	
			System.out.println("Empty List!");
			return;
		}
		else if(p==1)
		{
			delFromBeg();
			return;
		}
		else
		{
			int count=1;
			Node h=head;
			Node prev = head;
			while(count!=p && h.next!=null)
			{
				count++;
				prev=h;
				h=h.next;
			}
			
			prev.next=h.next;
			
		}
	}
	
	public void delFromBeg()
	{
		head=head.next;
	}
	
	public int size()
	{
		int count = 0 ;
		
		if(head==null)
			return count;
		
		Node thead = head;
		while(thead!=null)
		{
			count++;
			thead=thead.next;
			
		}
		
		return count;
		
	}
	
	public static void main(String[] args)
	{
		Linkedlist list = new Linkedlist();
		list.head = new Node(5);
		list.addAtEnd(10);
		list.addAtBeg(1);
		list.addAtBeg(6);
		list.delFromPosition(4);
		list.delFromPosition(1);
		list.delFromPosition(2);
		list.delFromPosition(1);
		list.display();
		System.out.println(list.size());
		
	}
	
}
