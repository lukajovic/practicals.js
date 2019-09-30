// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.;

function calcRet(yearOfBirth, gender) {

    var usersAge = 2019 - yearOfBirth;

    if (usersAge > 65 && gender === "male") {

        return "This male user is retired"

    } else if (usersAge > 60 && gender === "female") {

        return "This female user is retired"
    }

    return usersAge;

}

console.log(calcRet(1940, "male"));