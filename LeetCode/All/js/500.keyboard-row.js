/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const row1 = 'qwertyuiop';
  const row2 = 'asdfghjkl';
  const row3 = 'zxcvbnm';

  return words.filter((word)=>{
    const arr = word.toLowerCase().split('');
    return canBeTypedWithRow(arr,row1) ||
      canBeTypedWithRow(arr,row2) ||
      canBeTypedWithRow(arr,row3);
  })
};

const canBeTypedWithRow = (wordArr,row)=>{
  for(const ch of wordArr){
    if(!row.includes(ch))
      return false;
  }
  return true;
}
