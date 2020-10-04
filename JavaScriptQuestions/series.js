// Question: given a series
// input => 16 17 4 3 5 2
// output=> 17 17 5 5 5 2
// replace if current node is less than the next node.

let inputArr = [16,17,4,3,5,2];

const series = function(arr){
    let len = arr.length-1;
    let max = arr[len];
    for(let i=len-1;i>=0;i--){
        if(arr[i]>=max){
            max=arr[i];
        }
        else{
            arr[i]=max;
        }
    }
    return arr;
}

console.log(series(inputArr));

