let arrays = [[1, 2, 3], [4, 5], [6]];
let res = [];

console.log(arrays.reduce((a,b)=>{
    if(typeof b == "object"){
        
        b.reduce((val,next)=>{
            val.push(next);
            return val
        },a)
    }
    else{
        a.push(b)
    }
    return a;
}));