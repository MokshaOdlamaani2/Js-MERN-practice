let name = "Zara";
const age = 20;
let isStudent = true;

console.log(typeof name);  // string
console.log(typeof age);   // number
console.log(typeof isStudent); // boolean

/* --------------------*/
let num = 5;
let str = "5";

console.log(num == str);  // true (type coercion)
console.log(num === str); // false (strict equality)
/*---------------- */
function greet1(name) {
  console.log("Hello " + name);
}

const greet2 = (name) => {
  console.log(`Hi ${name}`);
};

greet1("Aman");
greet2("Aman");

/*----------*/
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];  // spread
console.log(moreNumbers);

function sum(...args) {   // rest
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));



