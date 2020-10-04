/*
    Implement a trie with insert, search, and startsWith methods.

    Example:
        Trie trie = new Trie();

        trie.insert("apple");
        trie.search("apple");   // returns true
        trie.search("app");     // returns false
        trie.startsWith("app"); // returns true
        trie.insert("app");
        trie.search("app");     // returns true

    Note:
        You may assume that all inputs are consist of lowercase letters a-z.
        All inputs are guaranteed to be non-empty strings.
*/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.head = new Node('');
};

function Node(val){
    this.key = val;
    this.isWord = false;
    this.children = {};
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currNode = this.head;
    insert(word,currNode);
    // console.log("head",JSON.stringify(this.head));
};

function insert(word,node){
    let ch = word.slice(0,1);
    if(ch.length === 0){
        node.isWord = true;
        return;
    }

    let currNode = node;
    if(currNode.children[ch] != null){
        currNode = currNode.children[ch];
    }
    else{
        let newNode = new Node(ch);

        currNode.children[ch] = newNode;
        currNode = currNode.children[ch];
    }
    word = word.substring(1);
    return insert(word,currNode);
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currNode = this.head;
    return search(word,currNode);
};

function search(word,node){
    let ch = word.slice(0,1);

    if(ch.length === 0){
        return node.isWord
    }

    let currNode = node;
    if(currNode.children[ch] != null)
        currNode = currNode.children[ch];
    else
        return false;
    word = word.substring(1);
    return search(word,currNode);
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currNode = this.head;
    return startsWith(prefix,currNode);
};

function startsWith(word,node){
    let ch = word.slice(0,1);

    if(ch.length === 0)
        return true;
    let currNode = node;
    if(currNode.children[ch] != null)
        currNode = currNode.children[ch];
    else
        return false;
    word = word.substring(1);
    return startsWith(word,currNode);
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */