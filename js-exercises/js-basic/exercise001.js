let date = new Date();
let dateInfo = [date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds()];

function dayName() {
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dateInfo[0]];
}

day = dayName(dateInfo[0]);

console.log();
console.log(`Today is: ${day}.`);
console.log("Time: " + dateInfo[1] + "h " + dateInfo[2] + "min " + dateInfo[3] + "sec.");

