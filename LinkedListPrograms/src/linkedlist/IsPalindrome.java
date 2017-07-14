package linkedlist;

import java.util.Stack;

public class IsPalindrome {
	
	public static int checkPalindrome(Linkedlist list)
	{
		Stack<Node> stack = new Stack<Node>();
		Node thead = list.head;
		
		if(thead==null)
			return -1;
		
		while(thead!=null)
		{
			stack.push(thead);
			thead=thead.next;
		}
		
		thead=list.head;
		
		while(thead!=null)
		{
			Node popped = stack.pop();
			if(popped.data!=thead.data)
			{
				return 0;
			}
			
			thead=thead.next;
		}
		
		return 1;
		
	}
	
	public IsPalindrome(Linkedlist list)
	{
		int res = checkPalindrome(list);
		
		if(res==0)
			System.out.println("Not a palindrome");
		else if(res==-1)
			System.out.println("Empty List!");
		else
			System.out.println("Palindrome");
	}

	public static void main(String[] args) {
		
		Linkedlist list = new Linkedlist();
		list.addAtBeg(1);
		list.addAtBeg(2);
		list.addAtBeg(3);
		list.addAtBeg(2);
		list.addAtBeg(1);
		list.display();
		
		IsPalindrome p = new IsPalindrome(list);
	}

}
