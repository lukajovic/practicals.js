// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3;

function numOfApp(x) {

    var array = [2, 4, 7, 8, 7, 7, 1];

    var count = 0;

    for (let index = 0; index < array.length; index++) {

        var element = array[index];

        if (element === x) {

            count++
        }


    }
    return count;

}

console.log(numOfApp(7));;