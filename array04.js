// Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].

var array = [5, 15, -5, 20, 12, 18, 72, 14, 9];

for (let index = 0; index < array.length; index++) {

    if (array[index] % 3 == 0) {

        console.log(array[index]);

    }
}
