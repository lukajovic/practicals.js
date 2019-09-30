// 1. Write a program that checks if a given element e is in the array a .
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes;

function checkElement(element, array) {

    for (let index = 0; index < array.length; index++) {

        if (array[index] === element) {

            return "Yes"
        } else return "No"

    }
}

console.log(checkElement(3, [5, -4.2, 3, 7]));