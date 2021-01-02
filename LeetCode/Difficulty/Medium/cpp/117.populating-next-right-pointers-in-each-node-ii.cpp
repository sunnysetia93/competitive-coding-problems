/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
    
    Node* getLeftMostChild(Node* node) {
        while (node) {
            if (node->left) return node->left;
            if (node->right) return node->right;
            node = node->next;
        }
        return NULL;
    }
    
public:
    Node* connect(Node* root) {
        for (Node* curr = root; curr; curr = getLeftMostChild(curr)) {
            for (Node* temp = curr; temp; temp = temp->next) {
                if (temp->left)
                    temp->left->next = temp->right ? temp->right : getLeftMostChild(temp->next);
                if (temp->right)
                    temp->right->next = getLeftMostChild(temp->next);
            }
        }
        return root;
    }
};