// Write a function that takes an array of consecutive, increasing letters as input, and returns any missing letters in the array between the first and last letter

const missingLetters = (arr) => {
  if(arr.length === 0) return [];
  const result = [];
  if(arr[0] !== 'a'){ // handling if a not present - add dummy value 'a' to both array and result
    result.push('a');
    arr.unshift('a');
  }
  let prev = 97; // 'a'
  for(let i=1;i<arr.length;i++){
    let curr = arr[i].charCodeAt(0);
    if(prev + 1 !== curr){
      result.push(String.fromCharCode(prev+1));
      i--;
    }
    prev++;
  }

  return result;
}

console.log(missingLetters(['a','b','c','d','f']));
console.log(missingLetters(['b','c','d','f']));
console.log(missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']));
