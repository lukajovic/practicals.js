// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string";

function replaceSpace(string, separator) {

    var output = "";

    separator = separator || "-";

    for (let index = 0; index < string.length; index++) {

        var element = string[index];

        if (element === " ") {

            output += separator;
        } else output += element;

    }
    return output;
}

console.log(replaceSpace("My Ra Nd", "!"));