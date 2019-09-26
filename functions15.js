// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.;

function lastOccurence(string, x) {

    var lastindex = string.length - 1;

    for (let index = lastindex; 0 <= lastindex; index--) {

        if (string[index] === x) {

            return index + 1;
        }
    }

    return "-1";
}

console.log(lastOccurence("Abrakadabra", "a"));