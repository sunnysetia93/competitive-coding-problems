/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> minHeap = new PriorityQueue<ListNode>((a, b) -> a.val - b.val);
        
        for (ListNode l : lists)
            if (l != null) minHeap.add(l);
        
        ListNode dummy = new ListNode();
        ListNode tail = dummy;
        while (minHeap.size() != 0) {
            tail.next = minHeap.peek();
            minHeap.poll();
            tail = tail.next;
            if (tail.next != null)
                minHeap.add(tail.next);
        }
        return dummy.next;
    }
}