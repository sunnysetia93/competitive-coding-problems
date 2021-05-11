/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

class Solution {
    vector<Node*> new_nodes;
    
public:
    
    Solution() {
        new_nodes.resize(101);
    }

    Node* cloneGraph(Node* node) {
        if (!node) return NULL;
        queue<Node*> q;
        q.push(node);

        new_nodes[node->val] = new Node(node->val);
        while (!q.empty()) {
            Node* curr = q.front();
            q.pop();
            for (Node* u: curr->neighbors) {
                if (!new_nodes[u->val]) {
                    q.push(u);
                    new_nodes[u->val] = new Node(u->val);
                }
                new_nodes[curr->val]->neighbors.push_back(new_nodes[u->val]);
            }
        }
        return new_nodes[node->val];
    }
};