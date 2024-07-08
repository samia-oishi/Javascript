function checkCondition() {
    return new Promise((resolve, reject) => {
      let condition = Math.random() > 0.5; // Here we have set an xample condition of 50% chance to resolve or reject
      if (condition) {
        resolve("I am resolved.");
      } else {
        reject("I am rejected.");
      }
    });
  }
  
  // Calling the Promise and handling the result
  checkCondition()
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });