const Matrix = require("matrix");
//import {Matrix} from "./matrix.js";

let matrix = new Matrix(3, 2, (x, y) => `value for ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y,"->", value);
}
