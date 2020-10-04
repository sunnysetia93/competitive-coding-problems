let inputs = "";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on('data',function(input){
    inputs+=input;
})

process.stdin.on('end',function(){
    main(inputs);
})

process.on('SIGINT',function(){
    main(inputs);
    process.exit();
})

function main(inputs){
    let lines = inputs.split('\n');
    let testcases = parseInt(lines[0]);
    
    for(let i=1;i<=testcases;i++){
        let lineStr = lines[i].split(' ');
        let strA = lineStr[0];
        let strB = lineStr[1];

        let resp = findMinimumOperations(strA,strB);
        console.log(resp);
    }
}

function findMinimumOperations(strA,strB){
    let result=0;
    let mapA = {};
    let mapB = {};
    for(let i=0;i<strA.length;i++){
        let ch = strA.charAt(i);
        if(mapA[ch]==null){
            mapA[ch]=1;
        }
        else{
            mapA[ch]=mapA[ch]+1;
        }
    }
    for(let i=0;i<strB.length;i++){
        let ch = strB.charAt(i);
        if(ch=='\r')
            continue;

        if(mapA[ch]==null){
            console.log(ch);
            return -1;
        }

        if(mapB[ch]==null){
            mapB[ch]=1;            
        }
        else{
            mapB[ch]=mapB[ch]+1;
        }
    }

    let keys = Object.keys(mapA);
    for(let i=0;i<keys.length;i++){
        if(mapB[keys[i]]==null){
            return -1;
        }
        else{
            result += Math.abs(mapB[keys[i]] - mapA[keys[i]]);
        }
    }

    console.log(mapA);
    console.log(mapB);

    return result;
}


/*
    aabbcc
    bbccdd

    mapA:{
        a:2,b:2,c:2
    }
    mapB:{
        b:2,c:2,d:2
    }
*/