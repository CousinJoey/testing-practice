
const reverseString = require("./reverse");

test("Returns reverse string of one word", () => {
    expect(reverseString("hello")).toBe("olleh");
});

const reverseAll = require("./reverse");

test("Returns the reverse of entire string", () => {
    expect(reverseAll("hello this is a test")).toBe("tset a si siht olleh");
});


/*
const reverseAll = require("./reverse");

test("Returns capital string of words", () => {
    expect(reverseString("this is a bigger hello")).toBe()
});
*/