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
public:
    ListNode* insertionSortList(ListNode* head) {
        if (!head || !head->next) return head;

        ListNode dummy (-1, head);
        ListNode *prev = head, *next = head->next;
        ListNode *curr;
        while (next) {
            if (prev->val <= next->val) {
                prev = next;
            } else {
                curr = &dummy;
                while (curr != prev && curr->next->val < next->val) {
                    curr = curr->next;
                }
                prev->next = next->next;
                next->next = curr->next;
                curr->next = next;
            }
            next = prev->next;
        }
        return dummy.next;
    }
};