// 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

var students = [
    [' David ', 80],
    [' Marko ', 77],
    [' Dany ', 88],
    [' John ', 95],
    [' Thomas ', 68]
];

var sum = 0;

for (let index = 0; index < students.length; index++) {

    sum += students[index][1];

}

var avg = sum / students.length;

if (avg < 60) {
    console.log(" Grade : F ");
} else if (avg < 70) {
    console.log(" Grade : D ");
} else if (avg < 80) {
    console.log(" Grade : C ");
} else if (avg < 90) {
    console.log(" Grade : B ");
} else if (avg < 100) {
    console.log(" Grade : A ");
}