// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
// time complexity O(n^2^)

const computed = (value) => (cb) => {
  if (!cb) return value;
  if (cb.split(/[+\-*\/]/g).length > 1)
    return Math.floor(eval(`${value}${cb}`));

  return `${value}${cb}`;
};

const zero = computed("0");
const one = computed("1");
const two = computed("2");
const three = computed("3");
const four = computed("4");
const five = computed("5");
const six = computed("6");
const seven = computed("7");
const eight = computed("8");
const nine = computed("9");

const plus = computed("+");
const minus = computed("-");
const times = computed("*");
const dividedBy = computed("/");

export {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
