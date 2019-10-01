// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.;

function symmetricArr(array) {


    for (let index = 0; index < array.length / 2; index++) {

        var element = array[index];

        var elementPair = array[array.length - index - 1];

        if (element !== elementPair) {
            return false
        }

    }

    return true;

}

console.log(symmetricArr([2, 4, -2, 7, -2, 4, 2]));
