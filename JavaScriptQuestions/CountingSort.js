function countingSort(arr){
    let freq = [];
    let resultArray = [];
    let arrLength = arr.length;
    for(let i=0;i<arrLength;i++){
        if(freq[arr[i]]===undefined)
            freq[arr[i]]=0;
        freq[arr[i]]++;
    }
    let i=0;
    freq.forEach((val,index)=>{
        for(let j=1;j<=val;j++){
            resultArray[i++]=index;
        }
    })

    return resultArray;
}

let arr = [1,1,0,3,2,5,9,3];
let sorted = countingSort(arr);
console.log(sorted);