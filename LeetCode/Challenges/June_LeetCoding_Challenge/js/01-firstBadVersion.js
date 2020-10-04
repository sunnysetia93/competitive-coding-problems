/*
    You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
    Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
    You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
    Example:
    Given n = 5, and version = 4 is the first bad version.

    call isBadVersion(3) -> false
    call isBadVersion(5) -> true
    call isBadVersion(4) -> true

    Then 4 is the first bad version.
* */

// SOLUTION :-


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    const binarySearch = (start, end) => {
        if (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const isMidBadVersion = isBadVersion(mid + 1);
            if (isMidBadVersion) {
                const leftOfMid = mid - 1 >= 0 ? isBadVersion(mid) : true;
                if (leftOfMid) {
                    return binarySearch(start, mid - 1);
                } else {
                    return mid;
                }
            } else {
                return binarySearch(mid + 1, end);
            }
        } else
            return 0;
    }
    return function (n) {
        return binarySearch(0, n - 1) + 1;
    };
};