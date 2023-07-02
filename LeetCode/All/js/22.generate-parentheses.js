/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const arr = [];

    function recursiveParenthesis(str='(',openCount=0, closeCount=0){
        // when since n=1 will have one '(' and one ')', so 2 * n = 2
        if(str.length === 2 * n){ 
            if(openCount === closeCount){
                arr.push(str);
            }
            return;
        }

        if(openCount < n){ // opening bracket is less than allowed n
            recursiveParenthesis(str+'(',openCount+1,closeCount);
        }
        if(closeCount < openCount){ // there should be open bracket for every close bracket 
            recursiveParenthesis(str+')',openCount,closeCount+1);
        }
    }
    recursiveParenthesis('');
    return arr;
};
