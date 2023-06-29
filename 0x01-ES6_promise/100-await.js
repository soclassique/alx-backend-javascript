// Simulating an asynchronous operation with a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function that fetches data asynchronously
async function fetchData() {
  console.log('Fetching data...');
  await delay(2000); // Simulating a delay of 2 seconds
  console.log('Data fetched!');
  return { name: 'John Doe', age: 25 };
}

// Function that uses async/await to handle asynchronous operations
async function processAsync() {
  try {
    const data = await fetchData();
    console.log('Received data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function to start the asynchronous process
processAsync();
