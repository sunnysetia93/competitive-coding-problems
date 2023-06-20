/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length <=1) return 0;

  let max = 0, ptr = prices[0];
  for(let i=1;i<prices.length;i++){
    let curr = prices[i];
    if((curr-ptr) > max){
      max = curr-ptr;
    }
    if(curr < ptr){
      ptr = curr;
    }
  }

  return max;
};
