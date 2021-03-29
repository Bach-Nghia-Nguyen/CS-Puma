/**
 * Write a function called getLeapYears(start, end) that
 * returns a list of leap years from the year start to the
 * year end inclusively. (A year is a leap year if its number
 * is exactly divisible by 4 and is not exactly divisible by
 * 100. A year is always a leap year if its number is
 * exactly divisible by 400).
 */
const getLeapYears = (start, end) => {
  if (typeof start != "number" || typeof end != "number")
    console.log("Invalid input");

  let leapYears = "";

  for (let year = start; year <= end; year += 1) {
    if (year % 4 == 0) {
      leapYears += `${year} `;
    }
  }

  return leapYears;
};

// console.log(getLeapYears(1899, 2001));

/**
 * Write a function called reverseArray(arr) that returns
 * a copy of the input array in reversed order.
 */
const reverseArray = (array) => {
  if (array instanceof Array) {
    let localArray = [...array];
    // let localArray = array.flat(Infinity);
    localArray.reverse();
    return localArray;
  } else {
    return "Invalid input";
  }
};

// console.log(reverseArray(["A", "B", "C"]));

let arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));
// console.log(arr);

/**
 * Use getRandomInt() from Assignment 1 to generate an array
 *  called evenNumbers containing 100 random integer numbers
 * in the range 0 to 100 inclusively. Remove all odd numbers
 * in evenNumbers and store them in an array called oddNumbers.
 * Log both arrays to the console.
 */
const getRandomInteger = (from, to) => {
  let randomInteger = [];
  let randomOdd = [];
  let randomEven = [];

  for (let count = 0; count < 100; count++) {
    randomInteger.push(Math.round(from + Math.random() * (to - from)));
  }
  // console.log(randomInteger);

  for (let element of randomInteger) {
    if (element % 2 === 0) {
      randomEven.push(element);
    } else if (element % 2 !== 0) {
      randomOdd.push(element);
    }
  }

  console.log("The even numbers are: ", randomEven);
  console.log("The odd numbers are: ", randomOdd);
};

getRandomInteger(0, 100);
