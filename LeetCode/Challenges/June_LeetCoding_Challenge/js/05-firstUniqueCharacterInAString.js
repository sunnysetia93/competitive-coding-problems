/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * Examples:

 *  s = "leetcode"
    return 0.
 *  s = "loveleetcode",
    return 2.
 * Note: You may assume the string contain only lowercase letters.
 */


/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
    const map = {};

    let i = 0;
    const strlen = s.length;
    while (i < strlen) {
        const ch = s.charAt(i);
        if (map[ch] == null)
            map[ch] = i;
        else
            map[ch] = false;
        i++;
    }

    const filtered = Object.values(map).filter((x) => typeof (x) === 'number');
    if (filtered.length === 0)
        return -1;

    return Math.min(...filtered);

};