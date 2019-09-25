// 4. Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var array = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var x = "";

for (let index = 0; index < array.length; index++) {

    x += array[index];

}
console.log(x);