/*A JavaScript program to get the current date.  
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/
const date = new Date();
// const today =  ((date.getMonth()+1).length !=2 ? "0" + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + 
// (date.getDate().length !=2 ? "0" + (date.getDate()) : (date.getDate())) + "-" + date.getFullYear() 

let getDay = date.toLocaleString("defaut", {day: "2-digit"});
let getMonth = date.toLocaleString("default", {month: "2-digit"});
let getYear = date.toLocaleString("default", {year: "numeric"});
let today = getDay + "-" + getMonth + "-" + getYear
console.log(today)