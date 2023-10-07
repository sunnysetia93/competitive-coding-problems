class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;
    for(let ch of word){
        if(cur.children[ch] == null){
            cur.children[ch] = new TrieNode();
        }
        cur = cur.children[ch]; // eg: node = node.next
    }
    cur.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    for(let ch of word){
        if(cur.children[ch] !=null){
            cur = cur.children[ch];
        }
        else {
            return false;
        }
    }
    return cur.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    for(let ch of prefix){
        if(cur.children[ch] == null){
            return false;
        }
        cur = cur.children[ch];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
