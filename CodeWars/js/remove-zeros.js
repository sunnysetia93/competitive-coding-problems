// https://www.codewars.com/kata/52aae14aa7fd03d57400058f
// time complexity => O(n)

const isZero = number => (typeof number === "number" || typeof number === "string") && Number(number) === 0;

const removeZeros = array => {
  const zeros = [];
  const nonZeros = [];

  for (let i = 0; i < array.length; i++) {
    isZero(array[i]) ? (zeros[zeros.length] = array[i]) : (nonZeros[nonZeros.length] = array[i]);
  }

  return [...nonZeros, ...zeros];
};

export { removeZeros };