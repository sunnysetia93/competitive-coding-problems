package linkedlist;

public class PartitionList {

	public Linkedlist Partition(Linkedlist l,int x)
	{
		Linkedlist temp = new Linkedlist();
		
		Node h = l.head;
		if(h==null)
			return null;
		
		temp.addAtBeg(x);
		
		while(h!=null)
		{
			if(h.data<x)
			{
				temp.addAtBeg(h.data);	//left side of partition element
			}
			else if(h.data>x)
			{
				temp.addAtEnd(h.data);	//right side of partition element
			}
			h=h.next;
		}
		
		return temp;
	}
	public static void main(String[] args) {
		Linkedlist list = new Linkedlist();
		list.addAtBeg(6);
		list.addAtEnd(10);
		list.addAtBeg(1);
		list.addAtBeg(4);
		list.addAtBeg(15);
		list.addAtBeg(60);
		list.addAtBeg(3);
		list.display();
		PartitionList part = new PartitionList();
		list = part.Partition(list, 60);
		list.display();

	}

}
