// Task 1. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.

var input = 201;

if ((typeof input) == 'number') {


    if (input % 2 === 0) {


        var divisionResult = input % 2;

        console.log(input + " / 2  = " + divisionResult);

    } else { console.log("X") }
}