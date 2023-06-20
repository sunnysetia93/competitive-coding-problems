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
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *curr = head;
        ListNode *pfirst = NULL, *psecond = NULL;
        int len = 0;
        while (curr) {
            ++len;

            if (psecond) psecond = psecond->next;

            if (len == k) {
                pfirst = curr;
                psecond = head;
            }
            curr = curr->next;
        }
        swap(pfirst->val, psecond->val);
        return head;
    }
};