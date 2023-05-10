//a JavaScript program to find the area of a triangle where three sides are 5, 6, and 7.  
var num1 = 7;
var num2 = 5;
var num3 = 6;
const s = (num1 + num2 + num3)/2;
const area = Math.sqrt (s * (s-num1) * (s-num2) * (s-num3));
console.log(area);