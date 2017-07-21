package doublyLL;

public class Node 
{
	int key;
	String value;
	Node next;
	Node prev;
	
	public Node(int k,String p)
	{
		key=k;
		value=p;
		next=null;
		prev=null;
	}
}
