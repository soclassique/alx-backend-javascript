// Simulating a function that fetches user data from an API
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const users = {
        1: { id: 1, name: 'John Doe', email: 'john@example.com' },
        2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        3: { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
      };

      const user = users[userId];

      if (user) {
        resolve(user); // Resolve the promise with user data
      } else {
        reject(new Error('User not found')); // Reject the promise with an error
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the promise to fetch user data
const userId = 2;

fetchUserData(userId)
  .then((user) => {
    console.log('User data:', user);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('API call completed'); // Executed regardless of success or failure
  });
