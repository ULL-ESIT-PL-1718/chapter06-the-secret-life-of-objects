class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  toString() {
    return `a ${this.type} rabbit`;
  };
}

let blackRabbit = new Rabbit("black");

console.log(String(blackRabbit));
// → a black rabbit
