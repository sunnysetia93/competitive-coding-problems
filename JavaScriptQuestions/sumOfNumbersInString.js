// https://practice.geeksforgeeks.org/problems/sum-of-numbers-in-string/0

function sum(str){
    let arr = str.match(/\d+/g);
    console.log(arr);
    return arr.reduce((prev,curr)=>{
        return parseInt(prev)+parseInt(curr);
    },0)
}

console.log(sum("1abc2x30yz67"));