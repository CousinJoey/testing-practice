
const calculate = require("./calculator");

test("add", () => {
    expect(calculate(2,2,"add")).toBe(4);
});

test("mult", () => {
    expect(calculate(2,4,"mult")).toBe(8);
});

test("div", () => {
    expect(calculate(2,2,"div")).toBe(1);
});

test("sub", () => {
    expect(calculate(2,2,"sub")).toBe(0);
});