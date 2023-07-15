/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };
    for(const ch of text){
        map[ch]++;
    }

    // minimum number of occurence of needed chars B A LL OO N
    return Math.min(map.b, map.a, Math.floor(map.l/2), Math.floor(map.o/2), map.n); 
};
