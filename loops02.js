// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;

for (var index = 0; index < 1000; index++) {

    if (index % 3 === 0 && index % 5 === 0) {

        sum += index
    }


}
console.log(sum);
