/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
    void serializeUtil(TreeNode* root, string& result) {
        if (!root) return;
        result += to_string(root->val) + ";";
        serializeUtil(root->left, result);
        serializeUtil(root->right, result);
    }

    TreeNode* deserialize(string& data, int& si, int lo, int hi) {
        int sc_i = data.find_first_of(';', si);
        if (sc_i == -1) return NULL;

        string sVal = data.substr(si, sc_i - si);
        int val = atoi(sVal.c_str());
        if (val < lo || hi < val) return NULL;
        
        TreeNode* node = new TreeNode(val);
        si = sc_i+1;
        node->left = deserialize(data, si, lo, val);
        node->right = deserialize(data, si, val+1, hi);
        return node;
    }
    
public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        string result;
        serializeUtil(root, result);
        return result;
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        int si = 0;
        return deserialize(data, si, INT_MIN, INT_MAX);
    }
};

// Your Codec object will be instantiated and called as such:
// Codec* ser = new Codec();
// Codec* deser = new Codec();
// string tree = ser->serialize(root);
// TreeNode* ans = deser->deserialize(tree);
// return ans;