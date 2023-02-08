
function reverseString(string) {
    let newString = string.split("").reverse().join("");
    return newString;
}

function reverseAll(string) {
    let array = string.split(" ");

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].split("").reverse().join("");
    }

    let newString = array.reverse().join(" ");
    return newString;
}


module.exports = reverseString;

module.exports = reverseAll;