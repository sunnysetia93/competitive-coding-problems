/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length !== n*m){
        return []
    }
    const finalResult = [];
    let arr = [];
    for(let i=0;i < original.length;i++){
        arr.push(original[i]);
        if(arr.length === n){
            finalResult.push(arr);
            arr=[];
        }
    }
    return finalResult;
};
