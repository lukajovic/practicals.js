// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8];

function mulPos(array) {

    var newArr = [];

    for (let index = 0; index < array.length; index++) {

        var element = array[index];

        if (element > 0) {

            var doubleElement = element * 2;

            newArr[index] = doubleElement;
        } else {

            newArr[index] = element;
        }


    }
    return newArr;
}

console.log(mulPos([-3, 11, 5, 3.4, -8]));