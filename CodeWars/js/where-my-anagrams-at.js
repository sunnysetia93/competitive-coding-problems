// https://www.codewars.com/kata/where-my-anagrams-at/train/javascript

function anagrams(word, words) {
    return words.filter(secondWord=>checkAnagram(word,secondWord));
}
  
  function checkAnagram(a,b){
    let map = {};
    a.split("").forEach(ch=>{
      if(map[ch]!=null)
        map[ch]=map[ch]+1;
      else 
        map[ch]=1;
    });
    let barr = b.split("");
    for(let i=0;i<barr.length;i++){
      if(map[barr[i]]==undefined)
        return false;
      else
        map[barr[i]]=map[barr[i]]-1;
    }
    
    let values = Object.values(map);
    for(let val of values){
      if(val!=0)
        return false;
    }
    return true;
  }

  console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
