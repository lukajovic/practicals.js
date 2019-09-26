// 2. Write a program that checks if a given number is odd.

function oddChecker(x) {


    if (x % 2 !== 0) {
        return x + " is an odd number";

    } else return x + " is an even number";

}

console.log(oddChecker(6));