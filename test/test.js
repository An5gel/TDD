// mypair
// Monicah Mirembe


const assert = require('chai').assert;

describe('my test space', function () {
    let num = 9;
    let str = 'Angel';

    it('check that num is numeric', function () {
        assert.isNumber(num);
    });

    it('check that str is string', function () {
        assert.isString(str);
    });



    //Test First TDD Cycle 1

    // function multiply (a, b) { return 1;
    // } 

    // it.skip('check the result of the multiply function', function () {
    //     assert.equal(multiply(1, 1), 1);
    // });



        // Test First TDD Cycle 2

    function multiply (c, d) { return 4;
    }

    it('check my other function', function () {
        assert.equal(multiply(2, 2),4)
    });

});

// final assignment
// Define the multiply function
function multiply(a, b) {
    return a * b;
}

describe('my test space', function () {
    it('check the result of the multiply function with 1 and 1', function () {
        assert.equal(multiply(1, 1), 1);
    });

    it('check the result of the multiply function with 2 and 2', function () {
        assert.equal(multiply(2, 2), 4);
    });

    it('check the result of the multiply function with 3 and 3', function () {
        assert.equal(multiply(3, 3), 9);
    });

    it('check the result of the multiply function with 4 and 4', function () {
        assert.equal(multiply(4, 4), 16);
    });

    it('check the result of the multiply function with 23 and 45', function () {
        assert.equal(multiply(23, 45), 23*45);
    });

});
