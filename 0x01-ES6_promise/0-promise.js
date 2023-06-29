// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber); // Resolving the promise if the condition is met
    } else {
      reject(new Error('Random number is too high.')); // Rejecting the promise if the condition is not met
    }
  }, 2000); // Simulating a delay of 2 seconds
});

// Using the promise
myPromise
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  });
