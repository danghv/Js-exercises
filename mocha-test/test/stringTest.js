const assert = require('chai').assert;

const stringTest = require('../stringDemo');

testReverseString1 = stringTest.reverseString('hello');
testReverseString2 = stringTest.reverseString('hello world');
testReverseString3 = stringTest.reverseString('hello, world.');
testUpperString1 = stringTest.upperFirstLetter('hello, i am Dang');
testUpperString2 = stringTest.upperFirstLetter('hello, i am Dang. good.to.see,you');

testMaxWord = stringTest.searchMaxWord('hi 1 12 123 1234 thereee, minh.la.abcdefghijklmnmmmmm test');

// testMaxWord = stringTest.searchMaxWord(str);

describe("test mocha", function(){
    // function reverse string
    describe('reverse string 1', function(){
        it('hello should return olleh', function(){
            assert.equal(testReverseString1, 'olleh');
        });
    });
    describe('reverse string 2', function(){
        it('hello world should return olleh dlrow', function(){
            assert.equal(testReverseString2, 'olleh dlrow');
        });
    });
    describe('reverse string 3', function(){
        it('hello, world. should return olleh, dlrow.', function(){
            assert.equal(testReverseString3, 'olleh, dlrow.');
        });
    });

    // check function uppercase string
    describe('Uppercase string 1', function(){
        it('hello, i am Dang should return Hello, I Am Dang.', function(){
            assert.equal(testUpperString1, 'Hello, I Am Dang');
        });
    });
    describe('Uppercase string 2', function(){
        it('hello, i am Dang. good.to.see,you should return Hello, I Am Dang. Good To See You', function(){
            assert.equal(testUpperString2, 'Hello, I Am Dang. Good To See You');
        });
    });
    // check max word
    describe('maxword in string', function(){
        it('"hi 1 12 123 1234 thereee, minh.la.abcdefghijklmnmmmmm test" should return "abcdefghijklmnmmmmm"', function(){
            assert.equal(testMaxWord, 'abcdefghijklmnmmmmm');
        });
    });
});