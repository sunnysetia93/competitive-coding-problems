Array.prototype.flatten = function() {
    let result = [];
    const execute = (arr) =>{
        for(let i=0;i<arr.length;i++){
            let element = arr[i];
            Array.isArray(element)?execute(element):result.push(element);
        }
    }

    execute(this);
    return result;
}

let arr = [1,4,23,99,[32,false],[[14,2],[[["last element"]]]]];
console.log(arr.flatten());