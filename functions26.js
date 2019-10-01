// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16;

function sumOfPositive(array) {
    
    var newArray = 0;
    
    for (let index = 0; index < array.length; index++) {
        
        var element = array[index];

        

        if (element > 0) {

            newArray += element;

        }

    }
    return newArray;
}

console.log(sumOfPositive([3, 11, -5, -3, 2]));