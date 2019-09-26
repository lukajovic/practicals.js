// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"];

function stringToArray(string) {

    var array = [];

    for (let index = 0; index < string.length; index++) {

        var element = string[index];

        if (element === " ") {

            array[index] = null;
        } else array[index] = element;
    }
    return array;
}

console.log(stringToArray("My Random String"));