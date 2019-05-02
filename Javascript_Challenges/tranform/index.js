const Scripts = require('./scripts');

// use of filter and map => FILTER for finding script with direction "right to left"
// and then making an array with just their names using MAP
let RtlSCripts = Scripts.filter(s=>s.direction==="rtl");
console.log(RtlSCripts.map(r=>r.name));

function CharacterSize(s){
    return s.ranges.reduce((count,[from,to])=>{ //count starts with 0
        return count + (to-from);
    },0)
}

// finds size of script 1
console.log(CharacterSize(Scripts[0]));

// prints info of script with maximum no of characters
console.log(Scripts.reduce((a,b)=>{
    return CharacterSize(a) > CharacterSize(b)?a:b;
}));

//prints the size of script with maximum no. of characters
console.log(CharacterSize(Scripts.reduce((a,b)=>{
    return CharacterSize(a) > CharacterSize(b)?a:b;
})));


// ------------ finding scripts with maximum size with using HIGHER-ORDER FUNCTIONS --------------

function CharacterCount(s){
    if(s==null){
        return 0;
    }
    let count=0;
    for(let [from,to] of s.ranges){
        count+=to-from;
    }
    return count;
}

function maxWithHOF(){
    let max = null;
    for(let s of Scripts){
        if(CharacterCount(max)<CharacterCount(s)){
            max=s;
        }
    }

    return max;
}

console.log(maxWithHOF().name);
