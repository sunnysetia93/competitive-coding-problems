/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
 
    int getListLen(ListNode *head) {
        int len = 0;
        while (head) {
            ++len;
            head = head->next;
        }
        return len;
    }

public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        int lenA = getListLen(headA), lenB = getListLen(headB);
        if (lenA > lenB) {
            while (lenA != lenB) {
                --lenA;
                headA = headA->next;
            }
        } else if (lenB > lenA) {
            while (lenB != lenA) {
                --lenB;
                headB = headB->next;
            }
        }
        while (headA != headB) {
            headA = headA->next;
            headB = headB->next;
        }
        return headA;
    }
};