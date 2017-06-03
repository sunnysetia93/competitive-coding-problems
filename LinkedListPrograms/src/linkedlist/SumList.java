package linkedlist;

/*
 * you have two numbers represented in linked list in reverse order.
 * sum them and store in reverse order only
 * eg :
 * input : (7->1) + (2->1) = 17 + 12 = 29
 * output : 9->2
 * 
 * (for implementation of LinkedList Class check LinkedList.java in Current Folder
 *
 * By : Sunny Setia
 * */

public class SumList {

	public static void main(String[] args) {
		
		Linkedlist firstList = new Linkedlist();
		Linkedlist secondList = new Linkedlist();
		
		firstList.addAtEnd(7);
		firstList.addAtEnd(1);
		firstList.addAtEnd(6);
		firstList.addAtEnd(9);
		firstList.addAtEnd(9);

		firstList.display();
			
		secondList.addAtEnd(5);
		secondList.addAtEnd(9);
		secondList.addAtEnd(3);
		
		secondList.display();
		
		Linkedlist resultList = calculateSum(firstList,secondList);
		
		resultList.display();
		
		

	}

	private static Linkedlist calculateSum(Linkedlist firstList, Linkedlist secondList) 
	{
		if(firstList.head==null && secondList.head==null)
			return null;
		
		Linkedlist temp = new Linkedlist();
		
		Node f = firstList.head;
		Node s = secondList.head;
		
		int val = 0;
		int carry = 0;
		while(f!=null && s!=null)
		{
			val=f.data+s.data+carry;
			if(val>=10)
			{
				temp.addAtEnd(val%10);
				carry=val/10;
			}
			else
			{
				temp.addAtEnd(val);
				carry=0;
			}
			f=f.next;
			s=s.next;
		}
		
		while(f!=null)	//if elements left in first list
		{
			val=f.data+carry;
			if(val>=10)
			{
				temp.addAtEnd(val%10);
				carry=val/10;
			}
			else
			{
				temp.addAtEnd(val);
				carry=0;
			}
			f=f.next;
		}
		while(s!=null)	//if elements left in second list
		{
			val=s.data+carry;
			if(val>=10)
			{
				temp.addAtEnd(val%10);
				carry=val/10;
			}
			else
			{
				temp.addAtEnd(val);
				carry=0;
			}
			s=s.next;
		}
		if(carry>0)	//remaining carry
		{
			temp.addAtEnd(carry);
		}
		
		return temp;
	
	}

}
