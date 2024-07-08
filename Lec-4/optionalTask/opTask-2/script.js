    function retryOperation(operation, maxRetries) {
    return new Promise((resolve, reject) => {
      let attempts = 0;
  
      function attempt() {
        attempts++;
        operation()
          .then((result) => {
            console.log(`Attempt ${attempts} succeeded`);
            resolve(result);
          })
          .catch((error) => {
            console.log(`Attempt ${attempts} failed, retrying...`);
            if (attempts < maxRetries) {
              attempt();
            } else {
              reject(`Operation failed after ${maxRetries} attempts`);
            }
          });
      }
  
      attempt();
    });
  }
  
  // Example operation that succeeds or fails randomly
  function exampleOperation() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5; // 50% chance of success
      if (success) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    });
  }
  
  // Use the retryOperation function with the example operation
  retryOperation(exampleOperation, 5)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });