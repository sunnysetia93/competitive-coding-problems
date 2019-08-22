/* 
Bracket Expression
Given a balanced bracket expression, find the following in the forest representation of it:

Number of nodes
Number of levels
Maximum number of nodes at any level
Number of levels which have maximum nodes
Input Format
First line of input consists of an integer t denoting the number of test cases. First line of each test case consists of an integer n denoting the length of the expression. Second line consists of the bracket expression.

Output Format
For each test case print the four values asked above separated by space.

Constraints
1 <= t <= 10000
n = 2 * m where 1 <= m <= 1000

*/

function evaluateBrackets(input,inputLen){
    let stackCount=0;
    const output = {};
    let nodes = 0;
    for (let i = 0; i < inputLen; i++) {
        let bracket = input.charAt(i);
        if(bracket==='['){
            nodes++;
            stackCount++;
        }
        else{
            let level = stackCount;
            stackCount--;
            if(output[level]){
                let currCount = output[level];
                output[level]=currCount+1;
            }
            else{
                output[level]=1;
            }
        }
    }
    
    let outputValues = Object.values(output);
    let max = Math.max(...outputValues);
    let levelsWithMaxNodes = outputValues.reduce((acc,val)=>val===max?++acc:acc,0);
    
    console.log(nodes,outputValues.length,max,levelsWithMaxNodes)
}
function main(input) {
  let lines = input.split("\n");
  let testcases = Number(lines[0]);
  for (var x = 1; x <= (2*testcases); x+=2) {
        let inputLen = Number(lines[x]);
        let input = lines[x+1];
        evaluateBrackets(input,inputLen);
  }

}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
  main(stdin_input);
});