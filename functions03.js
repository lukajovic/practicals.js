// 3. Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(x) {

    if (x >= 100 && x < 1000) {

        return x + " is a three digit long number"
    } else return x + " is not a three digit long number"
}

console.log(threeDigitNumber(192));