/*
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.

 * Note: Do not use any built-in library function such as sqrt.

 * Example 1:
       Input: 16
       Output: true
 * Example 2:
    Input: 14
    Output: false
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i=1;
    const mid = Math.ceil(num/2);
    for(;i<=mid;i++)
        if(i*i === num)
            return true;
    return false;
};