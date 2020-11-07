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
    ListNode* head = NULL;
    int carry = 0;

    void appendNode(int sum) {
        carry = sum / 10;
        head = new ListNode(sum % 10, head);
    }
public:

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        stack<int> s1, s2;
        while (l1) {
            s1.push(l1->val);
            l1 = l1->next;
        }
        while (l2) {
            s2.push(l2->val);
            l2 = l2->next;
        }
        while (!s1.empty() && !s2.empty()) {
            appendNode(carry + s1.top() + s2.top());
            s1.pop(); s2.pop();
        }
        while (!s1.empty()) {
            appendNode(carry + s1.top());
            s1.pop();
        }
        while (!s2.empty()) {
            appendNode(carry + s2.top());
            s2.pop();
        }
        if (carry == 1) {
            appendNode(1);
        }
        return head;
    }
};