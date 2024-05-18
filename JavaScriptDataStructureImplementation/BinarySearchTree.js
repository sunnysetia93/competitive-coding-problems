class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.val <= node.val) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    //  finds the minimum node in tree
    // searching starts from given node
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    remove(val) {
        this.root = this.removeNode(this.root, val);
    }

    removeNode(node, val) {
        if (!node) {
            return null;
        }

        if (val < node.val) {
            node.left = this.removeNode(node.left, val);
            return node;
        } else if (val > node.val) {
            node.right = this.removeNode(node.right, val);
            return node;
        } else {
            // found

            if (node.left === null && node.right === null) { // no children
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            const aux = this.findMinNode(node.right)
            node.val = aux.val; // copy the min value

            node.right = this.removeNode(node.right, aux.val); // now remove the aux node
            return node;
        }
    }

    inOrderTraversal() {
        return this.inOrder(this.root);
    }

    inOrder(node) {
        if (!node)
            return;
        this.inOrder(node.left);
        console.log(node.val);
        this.inOrder(node.right);
    }

    validate(iterative = true) {
        if (iterative) {
            return this.isValidBSTIterative(this.root);
        } else {
            return this.isValidBST(this.root);
        }

    }

    isValidBST(node, lowerBound = -Infinity, upperBound = Infinity) {
        if (!node) {
            return true;
        }

        if (lowerBound < node.val && node.val < upperBound) {
            return this.isValidBST(node.left, lowerBound, node.val) && this.isValidBST(node.right, node.val, upperBound);
        } else {
            return false;
        }
    }

    isValidBSTIterative(node) {
        const sortedArray = this.inOrderTraversalIterative(node);
        for (let i = 1; i < sortedArray.length; i++) {
            if (sortedArray[i - 1] >= sortedArray[i]) {
                return false;
            }
        }
        return true;
    }

    inOrderTraversalIterative(node) {
        if (!node) {
            return [];
        }

        const stack = [];
        const result = [];

        while (node != null || stack.length != 0) {
            if (node) { // check if root then add to stack and move to left
                stack.push(node);
                node = node.left;
            } else { // no left part means pop and add left to list and move to it's right
                node = stack.pop();
                result.push(node.val);
                node = node.right;
            }
        }
        return result;
    }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
console.log(BST);
BST.inOrderTraversal();
BST.remove(15)
console.log()
BST.inOrderTraversal();
console.log(BST.validate(false) ? "Valid BST" : "Not valid");
console.log(BST.validate() ? "Valid BST" : "Not valid");
