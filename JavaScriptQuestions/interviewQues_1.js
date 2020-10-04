/*
    Interview Question: 
    
    fn(1)(2)(3) => 9
    fn(2)(2)(1) => 4
    fn(2,2)(1) => 4
    fn(2,2,1) => 4
    fn() => 0
*/

function fn(a,b,c){
    if(a && b && c){
        return (a+b)*c;
    }
    else if(a && b){
        let sum = a + b;
        return function(c){
            return sum*c;
        }
    }
    else if(a){
        return function(b){
            return function(c){
                return (a+b)*c;
            }
        }
    }
    else
        return 0;
}

console.log(fn(1)(2)(3))    // 9
console.log(fn(2)(2)(1))   // 4
console.log(fn(2,2)(1))   // 4
console.log(fn(2,2,1))   // 4
console.log(fn())       // 0