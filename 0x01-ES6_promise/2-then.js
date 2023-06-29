// Function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Data fetched successfully';
      resolve(data);
    }, 2000);
  });
}

// Using the promise with then()
fetchData()
  .then((result) => {
    console.log('First .then() handler:', result);
    return result.toUpperCase();
  })
  .then((result) => {
    console.log('Second .then() handler:', result);
    return result + '!!!';
  })
  .then((result) => {
    console.log('Third .then() handler:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
