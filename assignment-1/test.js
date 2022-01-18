const assert = require('chai').assert;
const sumOfArray = require('../sumOfArray');

describe("sumOfArray",function(){
    let testCount = 1;

    beforeEach(function(){
        console.log("\nRunning Test Case",testCount,": ")
        testCount++;
    });
    
    it("Array of Numbers",function(){
        assert.equal(sumOfArray([1,-2,-3,4,5]),5);
    });

    it("Array of Characters",function(){
        assert.equal(sumOfArray(['a','b','c','d']),'abcd');
    });

    it("Array of single element - (Number & Character)",function(){
        assert.equal(sumOfArray([1]),1);
        assert.equal(sumOfArray(['a']),'a');
    });

    it("Error message on passing undefined",function(){
        assert.equal(sumOfArray(undefined),'Error - Wrong Input');
    });

    it("Error message on passing Null",function(){
        assert.equal(sumOfArray(null),'Error - Wrong Input');
    });
    afterEach(function(){
        console.log("Test Case Passed.");
    });
})
