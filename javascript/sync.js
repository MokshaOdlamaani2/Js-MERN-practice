function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting!"), 2000);
  });
}

async function run() {
  console.log("Start waiting...");
  let message = await waitTwoSeconds();
  setTimeout(()=>console.log("Start waiting...123"),4000);
  console.log(message);
}

run();


//sync func

function greet() {
  return "Hello!";
}

let message = greet();
console.log(message); // Output: Hello!


//async  func

async function greet() {
  return "Hello!";
}

let promise = greet();
console.log(promise); 

promise.then(msg => console.log(msg)); // Output: Hello!


/*Async is better because it lets you write asynchronous code that looks and behaves like synchronous code, making it:

Easier to read and write (no nested callbacks or complex .then() chains)

Better at handling errors using simple try/catch

More straightforward to manage sequences of async tasks with await*/