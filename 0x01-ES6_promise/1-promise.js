// Function that returns a promise
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

// Using the promise
console.log('Before the promise');

wait(2000)
  .then((result) => {
    console.log(`Resolved after ${result} milliseconds`);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

console.log('After the promise');
