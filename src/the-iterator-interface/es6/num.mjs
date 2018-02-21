Number.prototype[Symbol.iterator] = function() {
  let ns = this.toString().split('').reverse();
  console.log(ns);
  let si = ns[Symbol.iterator]();
  let oldNext = si.next;
  si.next = () => { 
    let n = oldNext.call(si); 
    return {value: Number(n.value), done: n.done} 
  };
  return si;
};

let num = new Number(567);

let it = num[Symbol.iterator]();

console.log(it); // iterador 

console.log(it.next()); // { value: 7, done: false }
console.log(it.next()); // { value: 6, done: false }
console.log(it.next()); // { value: 5, done: false }
console.log(it.next()); // { value: NaN, done: true }

