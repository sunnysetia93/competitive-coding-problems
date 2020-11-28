/**
 * URL: https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3518/
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let maxCount = 0
        , tempCount = 0
        , arr = s.split('')
        , i=0
        , len = arr.length;
    for(i=0;i<len;i++){
        let currChar = arr[i];
        let prevChar = i>0 ? arr[i-1] :false;

        if(prevChar && prevChar === currChar){
            tempCount++;
        }
        else{
            if(tempCount >= maxCount){
                maxCount = tempCount;
                tempCount = 1;
            }else{
                tempCount=1
            }
        }
    }
    return Math.max(tempCount,maxCount);

};

// To run

const output = maxPower('hooraaaaaaaaaaay');
console.log(output); // 11