// mypair
// Monicah Mirembe

const assert = require('chai').assert;

// Define the factorial function
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Describe the test case
describe('Factorial', function() {
  it('should return the factorial of the number', function() {
    // Define the input and expected output
    const num = 5;
    const expectedOutput = 120;

    // Call the factorial function and get the actual output
    const actualOutput = factorial(num);

    // Assert that the actual output matches the expected output
    assert.equal(actualOutput, expectedOutput);
  });
});
