/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    let count = 0;
    let antiDiag = 0, diag = 0;
    let rows = [0, 0, 0], cols = [0, 0, 0];

    for (let [i, j] of moves) {
        // +1 for A, -1 for B
        let value = count % 2 === 0 ? +1 : -1;

        rows[i] += value;
        cols[j] += value;

        // main diagonal
        if (i === j) {
            diag += value;
        }

        // anti diagonal
        if (i + j === 2) {
            antiDiag += value;
        }

        // checking if there is a winner

        if ([rows[i], cols[j], diag, antiDiag].includes(3)) {
            return "A";
        } else if ([rows[i], cols[j], diag, antiDiag].includes(-3)) {
            return "B";
        }
        count++;
    }

    if (count === 9) {
        return "Draw";
    } else {
        return "Pending";
    }
};
