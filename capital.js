
function capital(string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

function capitalAll(string) {
    let array = string.split(" ");

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    let newString = array.join(" ");
    return newString;
}

module.exports = capital;
module.exports = capitalAll;