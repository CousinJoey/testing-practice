
function evaluate(a,b,op) {
    switch(op) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mult":
            return a * b;
        case "div":
            return a / b;
        default:
            return "no op selected";
    }
}

module.exports = evaluate;