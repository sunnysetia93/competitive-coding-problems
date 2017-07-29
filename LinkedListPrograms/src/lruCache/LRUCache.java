package lruCache;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import doublyLL.*;

public class LRUCache {

	DoublyLinkedList dll = new DoublyLinkedList();
	HashMap<Integer,LNode> map = new HashMap<Integer,LNode>();
	int capacity;
	
	public LRUCache(int cap)
	{
		capacity = cap;
	}
	
	public String get(int key)
	{
		if(map.containsKey(key))
		{
			LNode n = map.get(key);
			dll.remove(n);
			dll.addAtHead(n.getKey(), n.getValue());
			return n.getValue();
		}
		
		return "No Match found!";
	}
	
	public void set(int k,String val)
	{
		if(map.containsKey(k))
		{
			LNode n = map.get(k);
			dll.remove(n);
			dll.addNodeAtHead(n);
		}
		else
		{
			LNode newNode = new LNode(k,val);
			if(map.size()>=capacity)
			{
				LNode tail = dll.tail;
				map.remove(tail.getKey());
				dll.remove(tail);
				dll.addNodeAtHead(newNode);
			}
			else
			{
				dll.addNodeAtHead(newNode);
			}
			
			map.put(newNode.getKey(), newNode);
		}
	}
	
	public void printHashMap()
	{
		for(Map.Entry<Integer,LNode> x : map.entrySet())
		{
			System.out.println(x.getKey() + " - "+x.getValue());
		}
	}
	
	public static void main(String[] args) {
		
		int cap = 5;
		Scanner sc = new Scanner(System.in);
		LRUCache lru = new LRUCache(cap);
//		lru.set(1, "page1");
//		lru.set(2, "page2");
//		lru.set(3, "page3");
//		lru.dll.display();
//		lru.set(2, "page2");
//		lru.set(4, "page4");
//		lru.set(5, "page5");
//		lru.dll.display();
//		lru.set(6, "page6");
//		lru.dll.display();
//		lru.set(2, "page2");
//		lru.dll.display();
		
		int ch;
		do
		{
		
		System.out.println("Menu :\n1. Set Page\n2.Get Page\n3.Display\n");
		ch = sc.nextInt();
		
		switch(ch)
		{
			case 1:
					System.out.println("Enter Key & page");
					int k = sc.nextInt();
					String v = sc.next();
					lru.set(k, v);
					lru.dll.display();
					break;
			
			case 2:
					System.out.println("Enter Key:");
					k = sc.nextInt();
					System.out.println(lru.get(k));
					lru.dll.display();
					break;
			case 3:
					lru.dll.display();
					break;
			case 4: 
			default: System.exit(1);
		}
		
		}while(ch<=3 && ch>=1);
		

	}

}
