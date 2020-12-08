/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let i=0,j=0,rows = A.length, cols =A[0].length;
    for(i=0;i<rows;i++){
        let temp;
        reverseAndInvertRow(A[i]);
    }

    return A;
};

function reverseAndInvertRow(arr){
    let temp
        , i=0
        , len=arr.length
        , half = arr.length/2;
    for(;i<half;i++){
        temp = arr[i]^1;
        arr[i] = arr[len-1-i]^1;
        arr[len-1-i] = temp;
    }
    return arr;
}