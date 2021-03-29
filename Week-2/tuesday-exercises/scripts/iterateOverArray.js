/**
 * Peter gets paid $25 per hour on his remote job.
 * The array below holds 10 numbers, the working hours
 * he worked each day last two weeks (Sat and Sun off).
 */
let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];

/**
 * Iterate over the array, and print out Peter earned $... today! each day.
 */
// workingHours.forEach((hour) => {
//   let wage = hour * 25;
//   console.log(`Peter earned $${wage} today!`);
// });

/**
 * Calculate how much Peter made in the last two weeks.
 */
let totalHours = workingHours.reduce(
  (previousDay, nextDay) => previousDay + nextDay
);
let totalWage = totalHours * 25;
// console.log(totalWage);

/**
 * Peter realizes that every day his working hour is a
 * random integer number between 6 to 8 inclusively. And
 * he wants to estimate how much he can make in one year
 * (approximately 50 weeks, 5 working days per week). Let
 * use the function you made in Assignment 1 to create an
 * array that contains 250 numbers represent Peter's working
 * hours in one year. Use the array to calculate Peter's
 * estimated yearly income. Hint: find the way to add an
 * item to the end of an array in the Docs of Assignment 4.
 */
const randomWorkingHour = (from, to) => {
  return Math.round(from + Math.random() * (to - from));
};

function estimatedYearlyIncome(week) {
  let sum = 0;
  for (let i = 1; i <= week * 5; i++) {
    sum += randomWorkingHour(6, 8) * 25;
  }
  console.log(`Peter earned approximately $${sum} in ${week} weeks.`);
}
// estimatedYearlyIncome(51);
