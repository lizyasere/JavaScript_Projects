// A JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function check50 (num1, num2) {

if ((num1 == 50) || (num2 == 50) || ((num1 + num2) == 50)) {

    return true;
    
} else {

    return false;

}
};

console.log(check50(30, 50));

