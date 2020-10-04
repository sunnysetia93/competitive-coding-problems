// https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
function comp(array1, array2){
    if(array1==null || array2==null)
      return false;
    return array1.sort((a,b)=>a>b).map(a=>a*a).join(" ") === array2.sort((a,b)=>a>b).join(" ")
}
