//Write a range function that takes two arguments, start and end, and returns an array 
//containing all the numbers from start up to (and including) end.
//Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.
//As a bonus assignment, modify your range function to take an optional third argument that indicates
// the “step” value used when building the array.

function sum(arr){
    return arr.reduce((accumulator,val)=>accumulator+val);
}

function range(start,end,step=1){
    let arr = [];
    if(step<0){
        for (let i = start; i >=end;) {
            arr.push(i)
            i+=step;
        }
        return arr;
    }
    else if(step>0){
        for (let i = start; i <= end;) {
            arr.push(i)
            i+=step;
        }
        return arr;
    }
    else
        return [0];
}

console.log(sum(range(1, 10,2)));
console.log(sum(range(5, 2,-1)));