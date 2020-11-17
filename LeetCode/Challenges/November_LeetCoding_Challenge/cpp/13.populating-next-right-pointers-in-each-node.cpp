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
public:
    Node* connect(Node* root) {
        for (Node* curr = root; curr && curr->left; curr = curr->left) {
            for (Node* node = curr; node; node = node->next) {
                node->left->next = node->right;
                if (node->next) {
                    node->right->next = node->next->left;
                }
            }
        }
        return root;
    }
};