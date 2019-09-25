// Task 3. Write a conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var a = 0;
var b = -1;
var c = 4;

if (a > b && b > c) {
    if (b > c) {
        console.log(a, b, c)
    } else {
        console.log(a, c, b);

    };

} else if (b > a && b > c) {
    if (a > c) console.log(b, a, c)
    else {
        console.log(b, c, a);

    };

} else if (c > b && c > a) {
    if (a > b) {
        console.log(c, b, a)
    } else {
        console.log(c, a, b);
    };

}
