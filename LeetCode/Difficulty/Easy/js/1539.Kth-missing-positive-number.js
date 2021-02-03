/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingArr = []
        ,  i = 1
        ,  len = arr.length;
    let max = arr[len-1];

    missingArr = new Array(max).fill(0);
    arr.forEach(item=>missingArr[item]="test");

    missingArr.forEach((item,index)=>{
        if(item!=="test")
            missingArr[index] = index;
    });

    missingArr=missingArr.filter(item=>item!="test");

    if(missingArr.length<=1){
        return max+k;
    }
    else if(missingArr.length <= k){
        return max+Math.abs(k-(missingArr.length - 1));
    }

    return missingArr[k];
};