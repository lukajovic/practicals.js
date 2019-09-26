// 9. Write a program that calculates the sum of odd elements of a given array.

function oddElements() {

    var array = [5, 4, 2, 6, 7, 2, 4, 1, 7, 8, 4, 2, 4, 3, 3, 5];
    var count = 0;
    for (let index = 0; index < array.length; index++) {
        var element = array[index];

        if (element % 2 !== 0) {

            count += element;
        }

    }
    return count;



}

console.log(oddElements());