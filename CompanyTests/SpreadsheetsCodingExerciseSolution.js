class Spreadsheet {

  constructor(cells, rows = 4, cols = 4) {
    this.map = {}
    this.rows = rows;
    this.cols = cols;
    this.visited = new Set();
    for (let i = 0; i < this.rows; i++) {
      let key = cells[i][0];
      this.map[key] = [];

      for (let j = 1; j <= this.cols; j++) {
        this.map[key].push(cells[i][j]);
      }
    }
  }

  getValue(cell) {
    try {
      if (this.visited.has(cell))
        throw new Error('Cycle Detected');

      this.visited.add(cell);
      let newCell;
      if (typeof cell === 'string' && cell.length === 2) {
        let row = cell.charAt(0);
        let col = cell.charAt(1);
        newCell = this.map[row][col - 1];
      } else {
        // create stack

        let operators = [];
        let operands = [];

        for (let i = 0; i < cell.length;) {
          if (['+', '-', '/', '*'].includes(cell[i])) {
            operators.push(cell[i]);
            i++;
          } else {
            operands.push(cell[i] + cell[i + 1]);
            i += 2;
          }
        }

        while (operators.length != 0) {
          const operator = operators.pop();
          let a = operands.pop();
          if (typeof a != 'number') {
            a = this.getValue(a);
          }
          let b = operands.pop();
          if (typeof b != 'number') {
            b = this.getValue(b);
          }
          const result = eval(`${b}${operator}${a}`);
          operands.push(result);
        }
        newCell = operands[0];

      }

      if (typeof newCell === 'number')
        return newCell;

      return this.getValue(newCell);
    } catch (e) {
      console.log(e);
    }
  }
}

const cells = [
  ['A', 9, 'A1+C2/D3', 5, 'A1+B3'],
  ['B', 4, -10, 'A3+D3', 6],
  ['C', -23, 2, 9, 'A1*B2'],
  ['D', 'A4', 0, -10, 'B3'],
]
const sheet = new Spreadsheet(cells);
const cell = 'A4';
const value = sheet.getValue(cell);
console.log(value);

// 4 + 9 = 13
// 9 + 13 = 22
// 2/-10 = -0.2
// 9 + -0.2 = 8.8
