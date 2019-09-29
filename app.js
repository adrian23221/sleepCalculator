function getSleepHours(day) {
  if (day === "Monday") {
    return 8
  } else if (day === "Tuesday") {
    return 7
  } else if (day === "Wednesday") {
    return 6
  } else if (day === "Thursday") {
    return 5
  } else if (day === "Friday") {
    return 9
  } else if (day === "Saturday") {
    return 10
  } else if (day === "Sunday") {
    return 4
  }
};

console.log(getSleepHours("Sunday"));
console.log(getSleepHours("Sunday"))

const getActualSleepHours = () => 
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}
console.log(getActualSleepHours()); 
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('Perfect Sleep Hours')
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. Wake up!')
} else  {
   console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
};
}
calculateSleepDebt();


