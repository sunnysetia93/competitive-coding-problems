/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    const ways = (str, soFar = []) => {
        if(str.length === 0){
            result.push(soFar);
            return;
        }

        for(let i=0;i < str.length; i++){
            let prefix = str.substring(0,i+1);
            let rem = str.substring(i+1);
            if(isPalindrome(prefix)){
                ways(rem,[...soFar, prefix]);
            }
        }
    }
    ways(s);
    return result;
};

const isPalindrome = function(str){
    let lI = 0;
    let rI = str.length - 1;

    while(lI < rI){
        if(str[lI] !== str[rI]){
            return false;
        }
        lI++;
        rI--;
    }
    return true;
}
