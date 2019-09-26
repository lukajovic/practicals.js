// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

function letterApp() {

    var string = "AbrakadabrA";

    var count = 0;

    for (let index = 0; index < string.length; index++) {

        var letter = string[index];

        if (letter === "A" || letter === "a") {
            count++
        }
    }
    return count;



}

console.log(letterApp());