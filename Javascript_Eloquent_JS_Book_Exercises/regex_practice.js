/*
    \d Any digit character
    \w An alphanumeric character (“word character”)
    \s Any whitespace character (space, tab, newline, and similar)
    \D A character that is not a digit
    \W A nonalphanumeric character
    \S A nonwhitespace character
    . Any character except for newline

    ^ - INVERT - - [^01] - won't match 0s and 1s
    + - more than once
    * - 0 or more than zero
*/

let string = "in 1992";
let regFormat_1 = new RegExp("[0-9]");
let regFormat_2 = /[0-9]/;

console.log(regFormat_1.test(string));  // true
console.log(regFormat_2.test(string));  // true
console.log(/\d/.test(string)); // true

console.log(/[^01]/.test("0101010")); // false

console.log(/\d*/.test("asd"))  // true - zero or more than zero digits
console.log(/\d+/.test("asd"))  // false - alteast 1 digit

var date = new Date();
console.log(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());

console.log("papa".replace(/p/, "m"));
console.log("papa".replace(/p/g, "m"));