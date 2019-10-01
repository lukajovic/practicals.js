// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2;

function firstLarger(array) {

    var minElement = 948427242424;

    var firstLarger = 0;

    for (let index = 0; index < array.length; index++) {

        if (array[index] < minElement) {

            firstLarger = minElement;

            minElement = array[index];
        }

    }
    return firstLarger;

}

console.log(firstLarger([4, 2, 2, -1, 6]));
