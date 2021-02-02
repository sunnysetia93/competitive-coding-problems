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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
        priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> minHeap (cmp);

        for (auto l : lists)
            if (l) minHeap.push(l);

        ListNode dummy;
        ListNode *tail = &dummy;
        while (!minHeap.empty()) {
            tail->next = minHeap.top();
            minHeap.pop();
            tail = tail->next;
            if (tail->next)
                minHeap.push(tail->next);
        }
        return dummy.next;
    }
};