/*
 * Given an array of strings, group anagrams together.

 * Example:
    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]
 * Note:
     1. All inputs will be in lowercase.
     2. The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const primes = [7, 67, 97, 19, 2, 83, 31, 59, 11, 53, 37, 23, 41, 3, 13, 73, 101, 17, 29, 5, 43, 47, 61, 79, 89, 71];
const start = 97;

const groupAnagrams = function (strs) {
    const resObj = {};
    for (const str of strs) {
        let i = 0;
        let strLen = str.length;
        let prod = 1;
        while (i < strLen) {
            prod *= primes[str.charCodeAt(i) - start];
            i++
        }

        if (resObj[prod] != null)
            resObj[prod].push(str);
        else
            resObj[prod] = [str];
    }

    return Object.values(resObj);
};