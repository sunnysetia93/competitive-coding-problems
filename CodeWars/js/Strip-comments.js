// https://www.codewars.com/kata/strip-comments/train/javascript

function solution(input, markers) {
    let lines = input.split("\n");
    let result = "";
    for(let j=0;j<lines.length;j++){
        let line = lines[j];
        for(let i=0;i<line.length;i++){
          let ch = line.charAt(i);
          if(markers.includes(ch)){
            i=line.length;
          }
          else if(j!=lines.length-1){
            result += ch;
          }
          else{
            result+=ch;
          }
        }
        result = result.trim();
        if(j<lines.length-1){
          result+="\n";
        }
    }
    return result.trim();
  };

  function solution(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
  }