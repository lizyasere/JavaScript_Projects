//using the logical && operator
//You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

 
var score = 8;
console.log("Mid-level skills ", score > 0 && score < 10);

//using the logical || operator
 //Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.
 var timeRemaining = 0;
 var energy = 10;
 console.log("Game over ", timeRemaining == 9 || energy == 0)

 //Using the modulus operator, %, to test if a given number is odd
 //You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
 var num1 = 2;
 var num2 = 5;
 var test1 = num1 % 2
 var test2 = num2 % 2
 var result1 = test1 ==0
 var result2 = test2 ==0
 console.log("Is", num1, "an even number?", result1)
 console.log("Is", num2, "an even number?", result2)

 // Add numbers using the + operator
 console.log(5 + 10)

 //Concatenate numbers and strings using the + operator
 var now = " Now in ";
 var three = 3
 var d = "D! "
 console.log(now +  three +  d)

 //Use the += operator to accumulate values in a variable
 var counter = 0;
 counter += 5
 counter += 3
 console.log(counter)