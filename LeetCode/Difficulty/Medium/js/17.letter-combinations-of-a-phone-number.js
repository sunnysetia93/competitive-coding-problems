// Ques: please find the image with the same name as this file in this directory.
// or open this link => https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */

let numbers = {
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "wxyz"
};
var letterCombinations = function(digits) {

    let list = [];
    if(digits.length==0)
        return list;
    backTrack("",digits,list);
    console.log(list);
    return list;
};

function backTrack(combination, digits, list){
    
    if(digits.length==0){
        list.push(combination);
    }
    else{
        let digit = digits.substring(0,1);
        let letters = numbers[digit];
        
        for(let c=0;c<letters.length;c++){
            let letter = numbers[digit].substring(c,c+1);
            backTrack((combination+letter),digits.substring(1),list);
        }
    }
}