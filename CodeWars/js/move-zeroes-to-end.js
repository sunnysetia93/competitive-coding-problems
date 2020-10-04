// https://www.codewars.com/kata/moving-zeros-to-the-end/javascript

var moveZeros = function (arr) {
    let resultArr = [];
    let countOfZeroes = 0;
    for(let element of arr){
      if(element!==0)
          resultArr.push(element);
      else
        countOfZeroes++;
    }
    for(let i=0;i<countOfZeroes;i++)
      resultArr.push(0);
    
    return resultArr;
  }