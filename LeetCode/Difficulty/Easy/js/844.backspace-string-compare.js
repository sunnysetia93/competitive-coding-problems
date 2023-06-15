/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return pushAndPop(s) === pushAndPop(t);
};

const pushAndPop = (str) => {
  const arr = str.split('');
  const stack = [];

  arr.forEach(ch=>{
    if(ch === '#') // initially backspace won't be there as nothing to delete.
      stack.pop();
    else
      stack.push(ch);
  })

  console.log(stack);

  return stack.join('');
}
