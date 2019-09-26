// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa";

function concatString(x, string) {


    var c = " ";

    for (let index = 0; index < x; index++) {

        c += string;

    }

    return c;


}

console.log(concatString(3, "Ha"));