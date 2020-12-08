/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let result = [];
    for(let i=1;i<=n;i++){
        if(n%i===0)
            result.push(i);
        if(result.length === k)
            return result[k-1];
    }
    return -1;
};