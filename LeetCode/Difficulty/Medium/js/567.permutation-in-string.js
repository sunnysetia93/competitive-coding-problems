/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// O((n-1)! * m)
// var checkInclusion = function(s1, s2) {
    
//     const permute = (str='',rem) => {
//         if(str.length === s1.length){
//             // check if this string is present in s2
//             return s2.includes(str);
//         }

//         for(let i=0;i<rem.length;i++){
//             if(permute(str+rem[i], rem.slice(0, i).concat(rem.slice(i+1)))){
//                 return true;
//             }
//         }
//         return false;
//     }

//     return permute('',s1);
// };

var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length)
        return false;

    let s1Count = {}
    let s2Count = {}

    for(let i=0;i<s1.length;i++){
        let ch = s1[i];
        if(ch in s1Count){
            s1Count[ch]++;
        }
        else{
            s1Count[ch]=1
        }

        ch = s2[i];

        if(ch in s2Count){
            s2Count[ch]++;
        }
        else{
            s2Count[ch]=1
        }
    }


    let l = 0;
    let r = s1.length - 1;

    while(r < s2.length){
        if(areMapsEqual(s1Count,s2Count)){
            return true;
        }

        s2Count[s2[l]] = s2Count[s2[l]] - 1; // subtract left char of s2 as window has moved
        l++;
        r++;
        s2Count[s2[r]] = s2Count[s2[r]] != null ? s2Count[s2[r]] + 1 : 1; // add right new char of s2
    }

    return false;
}


function areMapsEqual(map1,map2){
    const keys = Object.keys(map1);
    for(let key of keys) {
       if(!map2[key] || map1[key] !== map2[key]) {
            return false;
        } 
    }
    return true;
}
