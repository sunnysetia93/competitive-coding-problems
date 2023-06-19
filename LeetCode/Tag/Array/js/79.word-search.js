/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const totalRows = board.length;
  const totalCols = board[0].length;

  const checkIfWordExist = (r, c, k) =>{
    if(r >= (totalRows) || r < 0){
      return false;
    }
    if(c >= (totalCols) || c < 0){
      return false;
    }
    if(!board[r][c]) return false;

    const value = board[r][c];
    if(value !== word[k]){
      return false;
    }
    if(k === word.length - 1) return true;
    board[r][c]=null;
    const returnValue = checkIfWordExist(r, c+1,k+1)
      || checkIfWordExist(r-1, c,k+1)
      || checkIfWordExist(r+1, c,k+1)
      || checkIfWordExist(r, c-1,k+1);
    
    if(returnValue) {
      return true;
    }
    board[r][c]=word[k];
    return false;
    
  }


  for(let i=0; i< totalRows; i++){
    for(let j=0; j< totalCols; j++){
      if(checkIfWordExist(i,j,0)){
        return true;
      }
    }
  }

  return false;
};
