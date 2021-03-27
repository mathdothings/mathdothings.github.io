let date = new Date();
let dateDay = date.getDay();
let dateHour = date.getHours();
let dateMinutes = date.getMinutes();
let dateSecons = date.getSeconds();

// get day 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = "";
for (e = 0; e < days.length; e++) {
  if (e === dateDay) {
    day = days[e];
  }
}

// get hours (am/pm)
let hours;
if (dateHour > 13) {
  dateHour -= 12;
  hours = dateHour + "PM";
}

else {
  hours = dateHour + "AM";
}

// get minutes
let minutes = dateMinutes;

// get seconds
let seconds = dateSecons;

console.log("Today is: ", day);
console.log("Current time is: " + hours + ":" + minutes + ":" + seconds);

