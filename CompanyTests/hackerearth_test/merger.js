process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let lines = input.split("\n");
    let testcases = lines[0];
    
    for(let t=1;t<(2*testcases);t+=2){
        let a = lines[t];
        let b = lines[t+1];
        // normal scenario
        let len_1 = compareStrings(a,b);
        let a_reverse = a.split("").reverse().join("");
        let len_2 = compareStrings(a_reverse,b);
        let b_reverse = b.split("").reverse().join("");
        let len_3 = compareStrings(a,b_reverse);
        let maxCommonLen = Math.max(len_1,len_2,len_3);
        
        console.log(a.length+b.length-maxCommonLen);
    }
}

function compareStrings(a,b){
    let j=0;
    let alen = a.length;
    let blen = b.length;
    let maxCommonLen = 0;
    for(let i=alen-1;i>=0;i--){
        let subA = a.substring(i);
        let subB = b.substring(0,subA.length);
        if(subA===subB)
            maxCommonLen=subA.length;
    }
    return maxCommonLen;
}

