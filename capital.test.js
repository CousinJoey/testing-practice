
const capital = require("./capital");

test("Returns first letter capital of string", () => {
    expect(capital("test")).toBe("Test");
});

const capitalAll = require("./capital");

test("Returns capital first letter of all words in string", () => {
    expect(capitalAll("this is a test")).toBe("This Is A Test");
});