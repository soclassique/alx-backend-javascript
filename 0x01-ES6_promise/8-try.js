// Function that throws an error
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Example usage of try-catch
try {
  const result = divideNumbers(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error.message);
}
