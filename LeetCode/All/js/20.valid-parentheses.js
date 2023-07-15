/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pairs = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let bracket of s){
        if(bracket in pairs){
            stack.push(pairs[bracket]);
        }
        else if(stack.pop() !== bracket){
            return false;
        }
    }
    return !stack.length;
};
