export class Solution {
  /**
   * @param text: A string.
   * @param words: A list of strings.
   * @return: Index pairs of a string.
   */
  indexPairs(text, words) {
    const results = [];
    for(let i=0;i<text.length;i++){
      for(let j=i;j<text.length;j++){
        if(words.find((word) => word === text.slice(i,j+1))){
            results.push([i,j]);
        }
      }
    }
    return results;
  }
}
