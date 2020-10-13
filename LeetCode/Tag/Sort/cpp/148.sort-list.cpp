/*
Explaination:
This problem can be easily solved using recurrence and divide-and-conquer.
But it consumes program stack to store the recurring function stack frame,
and consumes O(logN) space complexity. Recursion uses top-down strategy.
Why don't we try the opposite way i.e. bottom-up strategy.
It only consumes O(1) space complexity and O(NlogN) time complextity.
*/

/**
 * Merge sort using bottom-up policy, 
 * so Space Complexity is O(1)
 * Time Complexity is O(NlgN)
 * stable sort
*/
class Solution {

    /**
	 * Divide the linked list into two lists,
     * while the first list contains first N ndoes
	 * return the second list's head
	 */
    ListNode* splitN(ListNode* head, int N) {
        while ((--N) && head) {
            head = head->next;
        }
        if (!head) return NULL;
        ListNode* second = head->next;
        head->next = NULL;
        return second;
    }

    /**
	  * merge the two sorted linked list l1 and l2,
	  * then append the merged sorted linked list to the node head
	  * return the tail of the merged sorted linked list
	  */
    ListNode* mergeSortedLists(ListNode* l1, ListNode* l2, ListNode* tail) {
        while (l1 && l2) {
            if (l1->val <= l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }
        tail->next = l1 ? l1 : l2;
        while (tail->next) {
            tail = tail->next;
        }
        return tail;
    }

public:

    ListNode* sortList(ListNode* head) {
        if (!head || !head->next) return head;
        ListNode auxNode;
        auxNode.next = head;
        
        ListNode *tail, *curr, *first, *second;
        for (int size = 1; true; size <<= 1) {
            tail = &auxNode;
            curr = auxNode.next;
            while (curr) {
                ListNode *first = curr;
                ListNode *second = splitN(first, size);
                if (!second && curr == auxNode.next)
                    return auxNode.next;
                curr = splitN(second, size);
                tail = mergeSortedLists(first, second, tail);
            }
        }
        return NULL;
    }
};