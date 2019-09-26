// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2;

function letterOcc(string, x) {

    var count = 0;

    for (let index = 0; index < string.length; index++) {


        if (string[index] === x) {

            count++;

        }

    }
    return count;

}

console.log(letterOcc("Abrakadabra", "a"));