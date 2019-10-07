// https://www.codewars.com/kata/human-readable-duration-format/train/javascript

function formatDuration (seconds) {
    if(seconds===0) return 'now';
    
    let years = Math.floor(seconds/(365*24*60*60));
    let rem = seconds%(365*24*60*60);
  
    let days = Math.floor(rem/(24*60*60));
    rem = rem%(24*60*60);
  
    let hours = Math.floor(rem/(60*60));
    rem = rem%(60*60);
    
    let minutes = Math.floor(rem/60);
    let sec = rem%(60);
    
    let result = [];
    years!=0?result.push(pluralize(years,"year")):"";
    days!=0?result.push(pluralize(days,"day")):"";
    hours!=0?result.push(pluralize(hours,"hour")):"";
    minutes!=0?result.push(pluralize(minutes,"minute")):"";
    sec!=0?result.push(pluralize(sec,"second")):"";
    
    let finalResult = "";
    
    for(let i=0;i<result.length;i++){
      if(i==result.length-2){
        finalResult += result[i] + " and "
      }
      else if(i==result.length-1){
        finalResult += result[i];
      }
      else{
        finalResult += result[i]+", "
      }
    }
    
    
    return finalResult;
    
  }
  
  function pluralize(num,str){
    if(num===0)
      return "";
    else if(num==1)
      return num + " " + str;
    else
      return num + " " + str + "s"; 
  }
  