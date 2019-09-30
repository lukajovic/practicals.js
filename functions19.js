// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000];

function filterNonNumbers(inputArray) {

    var numArray = [];

    var positionFixer = 0;

    for (var index = 0; index < inputArray.length; index++) {
        var element = inputArray[index];
        var number = parseFloat(element);
        if (!isNaN(number) && isFinite(number)) {
            numArray[index - positionFixer] = number;
        } else {
            positionFixer++;
        }
    }
    return numArray;
}

console.log(filterNonNumbers([" 1 ", " 21 ", undefined, " 42 ", " 1e+3 ", Infinity]));

;