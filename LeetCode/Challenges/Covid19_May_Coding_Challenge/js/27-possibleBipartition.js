/*
    Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.
    Each person may dislike some other people, and they should not go into the same group.
    Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.
    Return true if and only if it is possible to split everyone into two groups in this way.

    Example 1:
        Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
        Output: true
        Explanation: group1 [1,4], group2 [2,3]

    Example 2:
        Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
        Output: false

    Example 3:
        Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
        Output: false

    Constraints:
        1 <= N <= 2000
        0 <= dislikes.length <= 10000
        dislikes[i].length == 2
        1 <= dislikes[i][j] <= N
        dislikes[i][0] < dislikes[i][1]
        There does not exist i != j for which dislikes[i] == dislikes[j].
*/
var possibleBipartition = function (N, dislikes) {
    const map = new Uint16Array(N + 1).fill(2047);
    let counter = 0;
    const len = dislikes.length;
    for (let i = 0; i < len; i++) {
        const A = map[dislikes[i][0]], B = map[dislikes[i][1]];
        const AP = A + (A % 2 ? -1 : 1), BP = B + (B % 2 ? -1 : 1);
        if (A === 2047) {
            if (B === 2047) {
                map[dislikes[i][0]] = counter++;
                map[dislikes[i][1]] = counter++;
            } else {
                map[dislikes[i][0]] = BP;
            }
        } else if (B === 2047) {
            map[dislikes[i][1]] = AP;
        } else {
            if (A === B) return false;
            if (A === BP) continue;
            for (let j = 1; j <= N; j++) {
                map[j] === B ? map[j] = AP :
                    map[j] === BP ? map[j] = A :
                        null;
            }
        }
    }
    return true;
};