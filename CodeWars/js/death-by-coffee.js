// https://www.codewars.com/kata/death-by-coffee/javascript

const coffeeLimits = function(y,m,d) {
    let healthNumber = y * 10000 + m * 100 + d;
    let currentHex;
    let current;
    let i;
    let result = [0,0];
    for(i=1;i<=5000;i++){
      current = healthNumber + i * 0xcafe;
      currentHex = current.toString(16);
      if(currentHex.includes("dead")){
          result[0]=i;
          break;
        }
    }
    for(i=1;i<=5000;i++){
      current = healthNumber + i * 0xdecaf;
      currentHex = current.toString(16);
      if(currentHex.includes("dead")){
          result[1]=i;
          break;
      }
    }
    return result;
}

export { coffeeLimits };
