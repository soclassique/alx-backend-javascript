// Simulating a function that fetches a photo from a server
function fetchPhoto(photoId) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const photos = {
        1: 'https://example.com/photo1.jpg',
        2: 'https://example.com/photo2.jpg'
      };

      const photo = photos[photoId];

      if (photo) {
        resolve(photo); // Resolve the promise with the photo URL
      } else {
        reject(new Error('Photo not found')); // Reject the promise with an error
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the promise to fetch a photo
const photoId = 3;

fetchPhoto(photoId)
  .then((photo) => {
    console.log('Photo URL:', photo);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
