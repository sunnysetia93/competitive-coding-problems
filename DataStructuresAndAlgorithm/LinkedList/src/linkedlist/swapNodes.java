package linkedlist;

/*
 * Swap nodes of a linkedlist and not just the data but swap the pointers.
 * (for implementation of LinkedList Class check LinkedList.java in Current Folder
 *
 * By : Sunny Setia
 * */

public class swapNodes {
	
	public Linkedlist swap(Linkedlist list,int x,int y)
	{
		if(x==y)
		{
			return list;
		}
		Node prevX=null,currX=list.head,prevY=null,currY=list.head;
		
		while((currX!=null && currX.data!=x)||(currY!=null && currY.data!=y))
		{
			if(currX.data!=x)
			{
				prevX=currX;
				currX=currX.next;
			}
			if(currY.data!=y)
			{
				prevY=currY;
				currY=currY.next;
			}
		}
		
		if(currX==null || currY==null)
		{
			return list;
		}
		
		if(prevX!=null)
			prevX.next=currY;
		else
			list.head = currY;
		
		if(prevY!=null)
			prevY.next=currX;
		else
			list.head=currX;
		
		Node t = currX.next;
		currX.next=currY.next;
		currY.next=t;
		
		return list;
	}

	public static void main(String[] args) {
		
		Linkedlist list = new Linkedlist();
		list.addAtBeg(5);
		list.addAtEnd(15);
		list.addAtEnd(25);
		list.addAtEnd(35);
		list.addAtEnd(45);
		list.display();
		
		swapNodes s = new swapNodes();
		Linkedlist res = s.swap(list, 5, 45);
		res.display();

	}

}
