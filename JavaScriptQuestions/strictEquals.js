function strictEquals(a, b) {

    const checkIfNaN = (x) => x !== x
    const checkIfNegativeZero = (x) => x === 0 && (1 / x) === -Infinity;

    // types are same
    if (typeof a === typeof b) {
        if (checkIfNegativeZero(a) || checkIfNegativeZero(b))
            return checkIfNegativeZero(a) && checkIfNegativeZero(b);
        if (checkIfNaN(a) && checkIfNaN(b))
            return true;
        return a == b;
    } else
        return false;
}

// tests:
console.log(strictEquals(42, 42) === true);
console.log(strictEquals("foo", "foo") === true);
console.log(strictEquals(false, false) === true);
console.log(strictEquals(null, null) === true);
console.log(strictEquals(undefined, undefined) === true);
console.log(strictEquals(NaN, NaN) === true);
console.log(strictEquals(-0, -0) === true);
console.log(strictEquals(0, 0) === true);
console.log(strictEquals(-0, 0) === false);
console.log(strictEquals(0, -0) === false);
console.log(strictEquals(0, NaN) === false);
console.log(strictEquals(NaN, 0) === false);
console.log(strictEquals(42, "42") === false);
console.log(strictEquals("42", 42) === false);
console.log(strictEquals("foo", "bar") === false);
console.log(strictEquals(false, true) === false);
console.log(strictEquals(null, undefined) === false);
console.log(strictEquals(undefined, null) === false);

/*
FROM DAN

// Like a === b
function strictEquals(a, b) {
  if (Object.is(a, b)) {
    // Same value.
    // Is this NaN?
    if (Object.is(a, NaN)) { // We already know a and b are the same, so it's enough to check a.
      // Special case #1.
      return false;
    } else {
      // They are equal!
      return true;
    }
  } else {
    // Different value.
    // Are these 0 and -0?
    if (
      (Object.is(a, 0) && Object.is(b, -0)) ||
      (Object.is(a, -0) && Object.is(b, 0))
    ) {
      // Special case #2.
      return true;
    } else {
      // They are not equal!
      return false;
    }
  }
}
* */