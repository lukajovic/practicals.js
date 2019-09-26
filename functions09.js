// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

function concatString(x, string) {

    var c = " ";

    for (let index = 0; index < x; index++) {

        c += string;

    }

    return c;
}

console.log(concatString(4, "abc"));