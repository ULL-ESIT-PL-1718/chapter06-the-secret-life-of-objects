class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let blackRabbit = new Rabbit("black");

let sym = Symbol("sym");
let sym2 = Symbol("sym");
Rabbit.prototype[sym] = 55;
Rabbit.prototype[sym2] = 10;
console.log(blackRabbit[sym]); // 55

let str = String("string");
let str2 = String("string");
Rabbit.prototype[str] = 55;
Rabbit.prototype[str2] = 10;
console.log(blackRabbit[str]); // 10
