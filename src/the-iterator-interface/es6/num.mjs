Number.prototype[Symbol.iterator] = function() {
  let ns = this.toString();
  console.log(ns);
  return ns[Symbol.iterator]();
};

let num = new Number(567);

let it = num[Symbol.iterator]();

console.log(it); // iterador 

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

