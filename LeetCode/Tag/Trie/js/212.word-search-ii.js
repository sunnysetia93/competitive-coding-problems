/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let result = [];
    
    function buildTrie() {
        let root = {};
        for(const word of words){
            let node = root;
            for(const ch of word){
                if(node[ch] == null){
                    node[ch] = {};
                }
                
                node = node[ch];
            }
            node.word = word;
        }
        return root;
    }

    function searchWord(node, i, j){

        if(node.word != null){
            result.push(node.word);
            node.word = null;
        }

        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length){
            return;
        }
        if(node[board[i][j]] == null){
            return; // not found
        }

        const ch = board[i][j];
        board[i][j] = '#';  // mark visited
        searchWord(node[ch], i + 1, j);
        searchWord(node[ch], i - 1, j);
        searchWord(node[ch], i, j + 1);
        searchWord(node[ch], i, j - 1);
        board[i][j] = ch;  // reset
    }

    const root = buildTrie();
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            searchWord(root,i,j);
        }
    }

    return result;
};
