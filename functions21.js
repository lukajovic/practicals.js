// 4. Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number;

function reverseNumber(num) {
    num = num + "";

    var output = "";

    var lastIndex = num.length - 1;

    for (var index = 0; index < num.length; index++) {
        var element = num[lastIndex - index];
        output += element;
    }

    var reversedNum = parseFloat(output);

    return reversedNum;
}

console.log(reverseNumber(98765));