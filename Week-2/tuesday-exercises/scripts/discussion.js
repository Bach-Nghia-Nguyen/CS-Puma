/**
 * ZiffZubb
 */
function range(start, end) {
  let numberArray = [];
  for (let number = start; number <= end; number += 1) {
    numberArray.push(number);
  }
  return numberArray;
}

function ziffZubb(numberArray) {
  for (let number of numberArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("ZiffZubb");
    } else if (number % 5 === 0) {
      console.log("Zubb");
    } else if (number % 3 === 0) {
      console.log("Ziff");
    } else {
      console.log(number);
    }
  }
}

// ziffZubb(range(1, 20));

/**
 * Greatest common divisor - Least common multiple
 */
function checkValidity(array) {
  for (let element of array) {
    if (typeof element != "number" || element <= 0) return "Invalid";
  }
}

function findSmallestNumber(numbers) {
  return numbers.reduce((num1, num2) => (num1 < num2 ? num1 : num2));
}

function divisorQualifier(testLimit, arrayToTest) {
  let qualifiedDivisors = [];

  for (let divisor = 1; divisor <= testLimit; divisor++) {
    if (arrayToTest.every((number) => number % divisor === 0)) {
      let qualifiedDivisor = divisor;
      qualifiedDivisors.push(qualifiedDivisor);
    }
  }

  return qualifiedDivisors;
}

function greatestCommonDivisor(...numbers) {
  if (checkValidity(numbers) == "Invalid") return "Invalid";

  let smallestNumber = findSmallestNumber(numbers);

  let qualifiedCommonDivisors = divisorQualifier(smallestNumber, numbers);

  let greatestCommonDivisor = Math.max.apply(null, qualifiedCommonDivisors);

  return greatestCommonDivisor;
}

// console.log(greatestCommonDivisor(28, 49, 105));

function calculateProduct(numbers) {
  let product = 1;
  for (let number of numbers) {
    product *= number;
  }
  return product;
}

function leastCommonMultiple(...numbers) {
  let productOfNumbers = calculateProduct(numbers);

  let gcd = greatestCommonDivisor(...numbers);

  let leastCommonMultiple = productOfNumbers / gcd;

  return leastCommonMultiple;
}

// console.log(leastCommonMultiple(28, 49, 105));

/**
 * Prime Number
 */

function isThisPrimeNumber(number) {
  if (typeof number != "number") return "Invalid input";
  if (number < 2 || (number * 10) % 10 != 0)
    return "Number must be POSITIVE INTEGER that is GREATER than 1";

  for (let factor = 2; factor < number; factor++) {
    if (number % factor == 0) {
      return false;
    }
  }

  return true;
}

// console.log(isThisPrimeNumber(13));

/**
 * Time
 */
function loggingTime(timeUnit) {
  let milliseconds = Date.now(),
    seconds = milliseconds / 1000,
    minutes = seconds / 60,
    hours = minutes / 60,
    days = hours / 24,
    years = days / 365;

  switch (timeUnit.toLowerCase()) {
    case "second":
    case "seconds":
      return seconds;

    case "minute":
    case "minutes":
      return minutes;

    case "hour":
    case "hours":
      return hours;

    case "day":
    case "days":
      return days;

    case "year":
    case "years":
      return years;

    default:
      break;
  }
}

// console.log(loggingTime("days"));

function findPreciseAge(birthday, timeUnit) {
  let ageInMilliseconds = Date.now() - new Date(birthday);
  let ageInSeconds = ageInMilliseconds / 1000,
    ageInMinutes = ageInSeconds / 60,
    ageInHours = ageInMinutes / 60,
    ageInDays = ageInHours / 24,
    ageInWeeks = ageInDays / 7,
    ageInYears = ageInDays / 365;

  switch (timeUnit.toLowerCase()) {
    case "second":
    case "seconds":
      return ageInSeconds;

    case "minute":
    case "minutes":
      return ageInMinutes;

    case "hour":
    case "hours":
      return ageInHours;

    case "day":
    case "days":
      return ageInDays;

    case "week":
    case "weeks":
      return ageInWeeks;

    case "year":
    case "years":
      return ageInYears;

    default:
      break;
  }
}

// console.log(findPreciseAge("1996-12-06", "weeks"));
