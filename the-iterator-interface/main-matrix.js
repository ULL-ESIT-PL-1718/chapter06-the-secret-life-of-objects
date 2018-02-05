const Matrix = require("matrix");

let matrix = new Matrix(3, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
