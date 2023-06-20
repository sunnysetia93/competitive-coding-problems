/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = new Array(n+1);
    arr[0] = 0;
    for(let i=1;i<n+1;i++){
        const res = i.toString(2);
        const removeZeroes = res.replace(/0/g,'');
        arr[i]= removeZeroes.length;
    }

    return arr;
};
