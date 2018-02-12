//const Matrix = require("matrix");
// Starting with version 8.5.0, Node.js supports ES modules natively, behind a command line option.
import {Matrix} from "./matrix.mjs";

let matrix = new Matrix(3, 2, (x, y) => `value for ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y,"->", value);
}
