console.log("*********** Using an Object as a Map ***************");
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log(`Is Jack's age known? ${"Jack" in ages}`);
// → Is Jack's age known? false
console.log(`Is toString's age known? ${"toString" in ages}`);
// → Is toString's age known? true
console.log(ages["toString"]); 
// → [Function: toString]
console.log(ages["toString"]()); 
console.log('ages hasOwnProperty toString? '+ages.hasOwnProperty("toString"));
// → false
console.log(Object.keys(ages)); // Object.keys only returns an object’s own keys
// → [ 'Boris', 'Liang', 'Júlia' ]

/*  
	If you pass null to Object.create, the resulting object will
	not derive from Object.prototype, and can safely be used as a map.
*/
console.log("*********** Object.create(null) ***************");
ages = Object.create(null);
ages["Boris"] = 39;

console.log(`Is toString's age known? ${"toString" in ages}`);
// → Is toString's age known? false

console.log("*********** Map ***************");

ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log(`Is Jack's age known? ${ages.has("Jack")}`);
// → Is Jack's age known? false

