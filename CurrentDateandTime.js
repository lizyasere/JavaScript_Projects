/*A JavaScript program to display the current day and time in the following format.  
Sample Output: Today is: Tuesday.
The current time is: 10 PM: 30 : 38*/
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const today = new Date();
let day = weekday[today.getDay()]
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log('Today is:', day)
console.log('The current time is:', time)
