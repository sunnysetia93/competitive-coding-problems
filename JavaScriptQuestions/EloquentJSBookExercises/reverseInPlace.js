function reverseInPlace(arr){

    for(let i=0;i<=Math.floor((arr.length - 1) / 2);i++){
        let el = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=el;
    }
    return arr;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(reverseInPlace(arr))