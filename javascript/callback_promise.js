//Callbacks -A callback is a function passed into another function to be run later. 
function fetchUserData(sayHello,sayHello1) {
  let user = "Maya"; 
  sayHello(user);
  sayHello1(user);
}

function sayHello(name) {
  console.log("Hello, " + name + "!");
} // so this function is called in above function 
function sayHello1(name) {
  console.log("good mrng " + name + "!");
} 
// Call the function with the callback
fetchUserData(sayHello,sayHello1);


//voting problem- Using Callback
function checkVotingEligibility(age, callback) {
  if (typeof age !== "number") {
    callback("❌ Invalid input", null);
  } else if (age >= 18) {
    callback(null, "✅ You can vote.");
  } else {
    callback(null, "🔸 You cannot vote.");
  }
}

function handleResult(error, message) {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
}


checkVotingEligibility(20, handleResult);
//promise✅ 2. Using Promise
function checkVotingEligibilityPromise(age) {
  return new Promise((resolve, reject) => {
    if (typeof age !== "number") {
      reject("❌ Invalid input");
    } else if (age >= 18) {
      resolve("Prom You can vote.");
    } else {
      resolve("🔸promm You cannot vote.");
    }
  });
}

// Call the function
checkVotingEligibilityPromise(10)
  .then(message => console.log(message))
  .catch(error => console.log(error));

  //Promises make async code cleaner, easier to manage, and more powerful than callbacks.

  /* With Callback -hard,messy:
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);*/


//With Promise:
function delayLog(msg, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}
  
delayLog("Step 1",1000)
  .then(() => delayLog("Step 2", 1000))
  .then(() => delayLog("Step 6", 1000));

  function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Aman" }), 1000);
  });
}

function getTasks(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Task 1", "Task 2"]), 1000);
  });
}

getUser()
  .then(user => {
    return getTasks(user.id).then(tasks => {
      console.log(`Tasks for ${user.name}:`, tasks);
    });
  });
