const toString = Symbol("toString");

Array.prototype[toString] = function() {
  return `${this.length} cm of blue string`;
};

console.log([1, 2]["toString"]());
// → 1,2
console.log([1, 2][toString]());
// → 2 cm of blue string
