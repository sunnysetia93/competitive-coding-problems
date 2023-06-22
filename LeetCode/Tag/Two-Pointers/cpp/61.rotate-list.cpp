/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
    int getListLength(ListNode* head) {
        ListNode *curr = head;
        int len = 0;
        while (curr) {
            ++len;
            curr = curr->next;
        }
        return len;
    }

public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (!head) return NULL;
        k %= getListLength(head);
        if (k == 0) return head;
        
        ListNode *p1 = head, *p2 = head;
        for (int i = 0; i < k; ++i) {
            p2 = p2->next;
        }
        while (p2->next) {
            p1 = p1->next;
            p2 = p2->next;
        }
        p2->next = head;
        head = p1->next;
        p1->next = NULL;
        return head;
    }
};