package lruCache;

import java.util.HashMap;

import doublyLL.*;

public class LRUCache {

	DoublyLinkedList dll;
	HashMap<Integer,Node> map;
	int capacity;
	
	public LRUCache(int cap)
	{
		dll = new DoublyLinkedList();
		map = new HashMap<Integer,Node>();
		capacity = cap;
	}
	
	public String get(int key)
	{
		if(map.containsKey(key))
		{
			Node n = map.get(key);
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
			Node n = map.get(k);
			dll.remove(n);
			dll.addAtHead(n.getKey(), n.getValue());
		}
		else
		{
			Node newNode = new Node(k,val);
			if(map.size()>=capacity)
			{
				Node tail = dll.tail;
				map.remove(tail.getKey());
				dll.remove(tail);
				dll.addAtHead(newNode.getKey(),newNode.getValue());
			}
			else
			{
				dll.addAtHead(newNode.getKey(),newNode.getValue());
			}
			
			map.put(newNode.getKey(), newNode);
		}
	}
	
	public static void main(String[] args) {
		
		int cap = 5;
		LRUCache lru = new LRUCache(cap);
		lru.set(1, "page1");
		lru.set(2, "page2");
		lru.set(3, "page3");
//		lru.set(1, "page1");
		lru.dll.display();
//		System.out.println(lru.get(1));
		

	}

}
