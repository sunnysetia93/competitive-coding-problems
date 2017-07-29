package doublyLL;

public class LNode 
{
	int key;
	String value;
	public LNode next;
	public LNode prev;
	
	public LNode(int k,String p)
	{
		key=k;
		value=p;
		next=null;
		prev=null;
	}
	
	public int getKey()
	{
		return key;
	}
	
	public String getValue()
	{
		return value;
	}
}
