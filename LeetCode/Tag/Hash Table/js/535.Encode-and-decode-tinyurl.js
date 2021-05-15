/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {

    let encodedString = '';
    for(let i=0;i<longUrl.length;i++){
        const code = longUrl.charCodeAt(i);
        const updatedCh = String.fromCharCode(code+5);
        encodedString += updatedCh;
    }
    console.log({encodedString});
    return encodedString;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let decodedString = '';
    for(let i=0;i<shortUrl.length;i++){
        const code = shortUrl.charCodeAt(i);
        const updatedCh = String.fromCharCode(code-5);
        decodedString += updatedCh;
    }
    console.log({decodedString});
    return decodedString;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */


/**
 * APPROACH 2 - https://leetcode.com/problems/encode-and-decode-tinyurl/discuss/1110551/JS-Python-Java-C%2B%2B-or-Easy-Map-Solution-w-Explanation
 * */


let codeDB = new Map(), urlDB = new Map()
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const getCode = () => {
    let code = new Array(6).fill()
        .map(_ => chars.charAt(~~(Math.random() * 62)))
    return "http://tinyurl.com/" + code.join("")
}

const encode = longUrl => {
    if (urlDB.has(longUrl)) return urlDB.get(longUrl)
    let code = getCode()
    while (codeDB.has(code)) code = getCode()
    codeDB.set(code, longUrl)
    urlDB.set(longUrl, code)
    return code
}

const decode = shortUrl => codeDB.get(shortUrl)
