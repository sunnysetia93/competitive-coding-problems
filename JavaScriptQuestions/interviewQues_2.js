/*
    Interview Question: 
    sum of arguments passed in such format

    sum(1)(2)(3) // 6
    sum(1)(2)(3)(4) // 10
*/

//technique 1 =>
let total = 0;
function sum(a){
    total+=a;
    return sum;
}

sum(1)(2)(3)(4);
console.log(total);

// technique 2 => constraint : limited to 3 brackets only | can be scaled to more arguments.

function sum1(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(sum1(1)(2)(3))