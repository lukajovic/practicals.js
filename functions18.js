// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function firstChars(string, n) {

    var output = "";

    for (let index = 0; index < string.length; index++) {

        output += string[index];

        if (index === (n - 1)) {

            output += "...";
        }
    }

    return output;

}
console.log(firstChars("Luka", 2));