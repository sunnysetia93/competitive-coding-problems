/*
Given a string, calculate the score that it would get in a game of Scrabble.

1 point: E, A, I, O, N, R, T, L, S, U
2 points: D, G
3 points: B, C, M, P
4 points: F, H, V, W, Y
5 points: K
8 points: J, X
10 points: Q, Z

* */

const pointsSystem = {
  E: 1, A: 1, I: 1, O: 1, N: 1, R: 1, T: 1, L: 1, S: 1, U: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
}

const scrabbleScore = (word) => {
  let pointsScored = 0;
  const wordArray = word.split("");
  for (let word of wordArray) {
    pointsScored += pointsSystem[word];
  }
  return pointsScored;
}

console.log(scrabbleScore('FIZZBUZZ'));
