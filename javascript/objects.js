// 1. Object literal with methods
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Alice

// 2. Accessing properties
console.log(person.name);       // Alice
console.log(person["age"]);     // 25

// 3. Adding, updating, deleting properties
person.job = "Developer";       // Add new property
person.age = 26;                // Update existing property
delete person.job;              // Delete property
console.log(person);

// 4. Object constructor function + prototype method
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hi, I'm " + this.name);
};

const bob = new Person("Bob", 30);
bob.greet(); // Hi, I'm Bob

// 5. Object.create()
const personProto = {
  greet() {
    console.log("Hey, " + this.name);
  }
};

const charlie = Object.create(personProto);
charlie.name = "Charlie";
charlie.greet(); // Hey, Charlie

// 6. ES6 Class syntax (same as constructor + prototype)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello from class, " + this.name);
  }
}

const dave = new PersonClass("Dave", 40);
dave.greet(); // Hello from class, Dave

// 7. Iterating over object properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// --- Now some array basics ---

const fruits = ['apple', 'banana', 'mango'];

// Add elements
fruits.push('orange');     // add to end
fruits.unshift('grape');   // add to start

// Remove elements
fruits.pop();              // remove last
fruits.shift();            // remove first

console.log(fruits);       // ['apple', 'banana', 'mango']

// Looping over array
fruits.forEach(fruit => console.log(fruit));

// Array transformations
const numbers = [1, 2, 3, 4, 5];

// map: double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled);      // [2, 4, 6, 8, 10]

// filter: only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);        // [2, 4]

// reduce: sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);          // 15
