/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        map<Node*, Node*> nodeMap;
        
        Node* prev = NULL, *curr = head;
        while (curr) {
            Node* newNode = new Node(curr->val);
            nodeMap[curr] = newNode;
            if (prev) prev->next = newNode;
            prev = newNode;
            curr = curr->next;
        }

        curr = head;
        while (curr) {
            nodeMap[curr]->random = nodeMap[curr->random];
            curr = curr->next;
        }
        return nodeMap[head];
    }
};