const assert = require('chai').assert;

// Define the fibonacci function
function fibonacci(n) {
    if (n < 0) {
        return "Invalid input";
    }
    else if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Define the test cases
describe('Fibonacci', function() {
    it('should return the correct value for the given input', function() {
        assert.equal(fibonacci(0), 0);
        assert.equal(fibonacci(1), 1);
        assert.equal(fibonacci(2), 1);
        assert.equal(fibonacci(3), 2);
        assert.equal(fibonacci(4), 3);
        assert.equal(fibonacci(5), 5);
        assert.equal(fibonacci(6), 8);
        assert.equal(fibonacci(7), 13);
    });
});
