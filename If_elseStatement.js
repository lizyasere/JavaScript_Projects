//an if else statement that determines your source of income based on your age
// var age = 80;
// if (age >=65) {
//     console.log("You get your income from your pension")    
// } else if (age<65 && age>=18) {
//     console.log("Each month you get a salary")
// }else if (age<18){
//     console.log("You get an allowance")
// }else {
//     console.log("The value of the age variable is not numerical")
// }

function IncomeSource(age){
    if (age >= 65) {
        console.log('Pension Monthly')
    }else if (age <= 65 && age >= 18) {
        console.log('Monthly Salary');
    }else if (age < 18 && age >=1) {
        console.log('Allownace Monthly');
    }else {
        console.log('Invalid');
    }
}

IncomeSource(-5);