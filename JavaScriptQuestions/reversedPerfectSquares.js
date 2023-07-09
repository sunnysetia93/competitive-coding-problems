const isPerfectSquare = (num) => {
  for(let i=1;i< Math.ceil(num/2);i++){
    if(i*i === num){
      return true;
    }
  }
  return false;
}

const reversedSquares = (num) => {
  if(String(num).length === 1) return isPerfectSquare(num);

  const reversedNumber = parseInt(String(num).split('').reverse().join(''));
  return isPerfectSquare(num) && isPerfectSquare(reversedNumber);
}

console.log(reversedSquares(9));
console.log(reversedSquares(441));
console.log(reversedSquares(25));
