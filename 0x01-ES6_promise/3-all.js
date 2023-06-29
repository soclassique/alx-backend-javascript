// Function that returns a promise with a delay
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// An array of promises
const promises = [
  delay(2000).then(() => 'Promise 1 resolved'),
  delay(1000).then(() => 'Promise 2 resolved'),
  delay(3000).then(() => 'Promise 3 resolved')
];

// Using Promise.all()
Promise.all(promises)
  .then((results) => {
    console.log('All promises resolved:');
    console.log(results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
