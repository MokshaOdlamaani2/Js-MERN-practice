// 1. let and const
let age = 25;
age = 26;            // can reassign with let

const name = "Alice";
// name = "Bob";      // Error: can't reassign const

// 2. Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3));  // 5

// 3. Template Literals
const greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting);

// 4. Destructuring (arrays and objects)
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second);  // 1 2

const person = { name: "Bob", age: 30 };
const { name: personName, age: personAge } = person;
console.log(personName, personAge);  // Bob 30

// 5. Spread Operator (arrays and objects)
const arr2 = [...arr, 4, 5];
console.log(arr2);  // [1, 2, 3, 4, 5]

const person2 = { ...person, job: "Developer" };
console.log(person2);

// 6. Rest Operator (function parameters)
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

// 7. Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();           // Hello, Guest!
greet("Charlie");  // Hello, Charlie!

// 8. Classes (OOP syntax)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();  // Rex barks.

// 9. Modules (export/import syntax - in separate files usually)
// export const PI = 3.14;
// import { PI } from './math.js';

// 10. Promises & async/await (short example)
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function asyncExample() {
  console.log("Waiting...");
  await wait(1000);
  console.log("Done!");
}

asyncExample();
