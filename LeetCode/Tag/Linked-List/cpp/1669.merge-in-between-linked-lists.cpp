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
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
        ListNode *prv = list1;
        int i = 1;
        for (; i < a; ++i)
            prv = prv->next;    // prv is the node behind the ath node
        
        ListNode *nxt = prv->next;
        for (; i <= b; ++i)
            nxt = nxt->next;    // nxt is the node after the bth node
        
        prv->next = list2;      // join prv to list2
        while(list2->next)
            list2 = list2->next;

        list2->next = nxt;      // join list2 to nxt
        return list1;
    }
};