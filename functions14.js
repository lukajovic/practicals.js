// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// the function should return -1.;

function firstOccurence(string, x) {

    for (let index = 0; index < string.length; index++) {


        if (string[index] === x) {

            return index + 1;
        }
    }
    return "-1";
}


console.log(firstOccurence("Luka", "a"));