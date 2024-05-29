/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0)
        return arr;
    const result = [];
    const flatten = (numbers, depth=0)=>{
        for(let ele of numbers){
            if(Array.isArray(ele) && depth < n){
                // traverse again if depth < n
                flatten(ele, depth+1)
            }
            else {
                result.push(ele);
            }
        }
    }
    flatten(arr)
    return result
};
