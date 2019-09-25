// 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
// message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C -
// "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message
// "Unknown grade".

var input = "A";


if (typeof input !== "String" && input !== "A" && input !== "B" && input !== "C" && input !== "D" && input !== "F") {
    console.log("Unkown grade");

}

switch (input) {

    case "A":

        console.log("Good job");

        break;

    case "B":

        console.log("Pretty good");

        break;

    case "C":

        console.log("Passed");

        break;

    case "D":

        console.log("Not so good");

        break;

    case "F":
        console.log("Failed");
}