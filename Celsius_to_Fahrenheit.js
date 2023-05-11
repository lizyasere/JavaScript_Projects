//A JavaScript program to convert temperatures to and from Celsius, to Fahrenheit.  
// [Formula: c/5 = (f-32)/9 [where c = temperature in Celsius and f = temperature in Fahrenheit]
/*Expected Output:
60°C is 140 °F	
45°F is 7.222222222222222°C */

//Convert From Celsius To Fahrenheit

function ConvertCelsius (Celsius) {

    var Fahrenheit = (Celsius * (9/5)) + 32 ;

    console.log(`${Celsius}°C is ${Fahrenheit}°F`)

}
 
 ConvertCelsius(60)


 
 //Convert From Fahrenheit To Celsius 

 function ConvertFahrenheit (Fahrenheit) {

    var Celsius = ((Fahrenheit -32) * (5/9));

    console.log(`${Fahrenheit}°F is ${Celsius}°C`)

 }

 ConvertFahrenheit(45)



// Using one function to calcuate temperature for both Fahrenheit and Celsius

 function temperatureConverter (temp, type) {
    if (type === 'Celsius' ) {
      var Celsius = (((temp -32) * (5/9)));

      console.log(`${temp}°F is ${Celsius}°C`)   

    } else if (type === 'Fahrenheit'){
      var Fahrenheit = (temp * (9/5)) + 32;
      
      console.log(`${temp}°C is ${Fahrenheit}°F`)
      
    } else {
      console.log('Invalid')
    }
 }

 temperatureConverter(60, 'Celsius')