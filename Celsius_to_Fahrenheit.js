//A JavaScript program to convert temperatures to and from Celsius, to Fahrenheit.  
// [Formula: c/5 = (f-32)/9 [where c = temperature in Celsius and f = temperature in Fahrenheit]
/*Expected Output:
60°C is 140 °F	
45°F is 7.222222222222222°C */

// function ConvertCelsius (Celsius) {
//     var Fahrenheit = (Celsius * (9/5)) + 32 ;
//     console.log(`${Celsius}°C is ${Fahrenheit}°F`)
// }
 
//  ConvertCelsius(60)

 function ConvertFahrenheit (Fahrenheit) {
    var Celsius = ((Fahrenheit -32) * (5/9));
    console.log(`${Fahrenheit}°F is ${Celsius}°C`)
 }

//  ConvertFahrenheit(45)

 function temperatureConverter (temp, type) {
    if (type === 'Celsius'  ) {
         
    }

 }