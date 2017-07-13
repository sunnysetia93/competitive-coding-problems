package linkedlist;

/*
 *  Ques. Arrange Even numbers after Odd numbers
 * 
 *  By: Sunny Setia
 */

public class evenOdd {
	
	public evenOdd(Linkedlist list,Linkedlist res)
	{
		Node thead = list.head;
		
		if(thead==null)
			res=list;
		else
		{
			while(thead!=null)
			{
				if(thead.data%2==0)
					res.addAtBeg(thead.data);
				else
					res.addAtEnd(thead.data);
				
				thead=thead.next;
			}
		}
	}

	public static void main(String[] args) {
		
		Linkedlist list = new Linkedlist();
		list.addAtEnd(10);
		list.addAtBeg(1);
		list.addAtBeg(6);
		list.addAtEnd(15);
		list.addAtEnd(4);
		list.display();
		
		Linkedlist result = new Linkedlist();
		evenOdd res = new evenOdd(list,result);
		result.display();
		
		
	}

}
