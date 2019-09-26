// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false;

function checkInput(x) {

    if (typeof x === "string") {

        return x + " is a String"

    } else return x + " is not a String";



}

console.log(checkInput("Luka"));