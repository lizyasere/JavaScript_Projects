//. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
//Any year that is evenly divisible by 4 is a leap year
// A leap year is a multiple of 4 and not of 400
//A leap year is a multiple of 400

// const year = prompt("Please enter a year",  )

// function CheckLeapYear(year) {
//     if ((year % 4 == 0) || (year % 400 == 0) && (year % 100 != 0)) {
//         console.log(year,  'is a leap year')
//     } else {
//         console.log (year, 'is not a leap year')
//     }
// }
   
// CheckLeapYear(year)

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Please enter a year:", function (year) {
    if ((year % 4 == 0 ) || (year % 100 != 0) && (year % 400 == 0)){
        console.log(year, 'is a leap year')
    } else {
        console.log(year, 'is not a leap year')
    }
    rl.close()
});