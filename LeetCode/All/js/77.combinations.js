/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    const permute = (arr, index) => {
      if(arr.length === k){
        return result.push(arr);
      }
      if(index > n){
        return;
      }

      for(let i=index; i <= n; i++){
        permute([...arr,i],i+1);
      }
    }

    permute([],1)
    return result;
};
