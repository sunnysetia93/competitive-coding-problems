function findPairs(arr,diff){
    let sortedArr = arr.sort((a,b)=>a-b);
    let arrLen = sortedArr.length;
    let pairs=[];
    for(let i=arrLen-1;i>0;i--){
        if(sortedArr[i]-sortedArr[i-1]===diff){
            pairs.push([sortedArr[i],sortedArr[i-1]])
            i--;
        }
    }
    return pairs
}

function findPairsDP(arr,diff){
    let sortedArr = arr.sort((a,b)=>a-b);
    let arrLen = sortedArr.length;
    let dp = [];
    dp[0]=[];
    for(let i=1;i<arrLen;i++){
        dp[i]=dp[i-1];
        if(sortedArr[i]-sortedArr[i-1]===diff){
            dp[i].push([sortedArr[i],sortedArr[i-1]]);
        }
    }
    return dp[arrLen-1];
}

function main(){
    let arr = [3, 5, 10, 15, 17, 11, 9];
    let diff = 4;
    console.log(findPairs(arr,diff));
    console.log(findPairsDP(arr,diff));
}
main();