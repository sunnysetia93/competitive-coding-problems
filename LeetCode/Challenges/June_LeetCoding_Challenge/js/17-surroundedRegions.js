/*
    Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
    A region is captured by flipping all 'O's into 'X's in that surrounded region.
    Example:
        X X X X
        X O O X
        X X O X
        X O X X

        After running your function, the board should be:

        X X X X
        X X X X
        X X X X
        X O X X

    Explanation:
        Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.
        Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are
        connected if they are adjacent cells connected horizontally or vertically.
* */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length == 0) return

    // dfs searching for '0'
    var recur = function(i, j) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return;
        if (board[i][j] != 'O') return;
        board[i][j] = '-';
        recur(i+1, j);
        recur(i-1, j);
        recur(i, j+1);
        recur(i, j-1);
    }

    // check left & right boundary
    for (let i=0;i<board.length;i++) {
        recur(i, 0);
        recur(i, board[0].length-1);
    }

    // check top & bot boundary
    for (let i=0;i<board[0].length;i++) {
        recur(0, i);
        recur(board.length-1, i);
    }

    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == 'O') board[i][j] = "X";
            if (board[i][j] == '-') board[i][j] = "O";
        }
    }
};