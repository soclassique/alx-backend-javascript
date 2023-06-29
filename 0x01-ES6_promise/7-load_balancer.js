// Array of server endpoints
const serverEndpoints = ['http://server1.example.com', 'http://server2.example.com', 'http://server3.example.com'];

// Counter to keep track of the next server index
let currentIndex = 0;

// Function to simulate processing a request
function processRequest(request) {
  // Get the current server endpoint based on the currentIndex
  const currentServer = serverEndpoints[currentIndex];

  // Increment the currentIndex to select the next server in the array
  currentIndex = (currentIndex + 1) % serverEndpoints.length;

  // Simulating processing the request on the selected server
  console.log(`Processing request ${request} on server ${currentServer}`);
}

// Simulating incoming requests
const requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

requests.forEach((request) => {
  processRequest(request);
});
