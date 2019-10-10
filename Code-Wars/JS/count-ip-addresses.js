// https://www.codewars.com/kata/count-ip-addresses/train/javascript

function ipsBetween(start, end){
    let startArr = start.split(".");
    let endArr = end.split(".");
    console.log(startArr,endArr);
    let level=0;
    let count =0;
    for(let i=3;i>=0;i--){  
      if(startArr[i]==0 && endArr[i]==0)
        break;
      let times = level*256;
      if(level!=0)
        count += (Math.abs(endArr[i]-startArr[i]))*times;
      else
        count += (Math.abs(endArr[i]-startArr[i]));
        
      console.log(count);
      level++;
    }
    
    return count;
  }