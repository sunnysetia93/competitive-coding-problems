// https://www.codewars.com/kata/first-non-repeating-character/javascript

function firstNonRepeatingLetter(s) {
  let map = {};
  let len = s.length;
  for(let i=0;i<len;i++){
    let ch = s.charAt(i).toLowerCase();
    if(map[ch]==null){
      map[ch]={
        pos:i,
        isDistinct:true
      }
    }
    else{
      map[ch].isDistinct=false;
    }
  }
  let minPos = Number.MAX_SAFE_INTEGER;
  for(let [key,value] of Object.entries(map)){
    if(value.isDistinct && minPos>value.pos)
      minPos=value.pos;
  }
  return s.charAt(minPos);
}