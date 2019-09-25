// 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var x = 2;

if (x > 12 || x < 1) {
    console.log("The input must be between 1 and 12");
}

switch (x) {

    case 12:
    case 1:
    case 2:
        console.log("It's Winter ");
        break;
    case 3:
    case 4:
    case 5:
        console.log("It's Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("It's Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("It's Autmn");


}
