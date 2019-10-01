// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 4;

function minValue(array) {

    var newArr = [];

    var minElementValue = 9241245125123;

    var minElementIndex = 0;


    for (let index = 0; index < array.length; index++) {

        var element = array[index];

        if (minElementValue > element) {

            minElementValue = element;
            minElementIndex = index;

        }
        newArr = [minElementValue, minElementIndex]
    }
    return newArr;

}

console.log(minValue([1, 5, 2, 10, -2]));