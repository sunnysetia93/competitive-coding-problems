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
    ListNode* deleteDuplicates(ListNode* head) {
        if (!head || !head->next) return head;

        if (head->val != head->next->val) {
            head->next = deleteDuplicates(head->next);
            return head;
        }

        ListNode *newHead = head;
        while (newHead && newHead->val == head->val)
            newHead = newHead->next;

        return deleteDuplicates(newHead);
    }
};