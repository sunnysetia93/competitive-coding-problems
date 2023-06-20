/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addNodes(ListNode* l1, ListNode* l2, int carry) {
        if (!l1 || !l2) {
            l1 = l1 ? l1 : l2;
            l2 = NULL;
            if (!l1) return carry ? new ListNode(1) : NULL;
        }

        if (!carry && !l2) return l1;

        l1->val += (l2 ? l2->val : 0) + carry;
        carry = l1->val / 10;
        l1->val %= 10;
        l1->next = addNodes(l1->next, l2 ? l2->next : NULL, carry);
        return l1;
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        return addNodes(l1, l2, 0);
    }
};