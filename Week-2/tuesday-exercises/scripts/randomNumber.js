/**
 * Write a loop that logs 5 random numbers between 0 and 1 to the console.
 */
const logRandomNumber = (quantity) => {
  for (let count = 0; count < quantity; count++) {
    let randomNumber = Math.random();
    console.log(randomNumber);
  }
};
// logRandomNumber(5);

/**
 * Write a function named getRandomInt() that return a random integer
 * number from 0 (inclusive) to 10 (exclusive). Put it in a loop that
 * runs 100 times to check whether you see all of the numbers from 0 to 9?
 */
/**
 * Improve the function so that it return a random integer
 * number between start (inclusive) and end (inclusive)
 */
const getRandomInt = (from, to) => {
  let randomInteger = Math.round(from + Math.random() * (to - from));
  return randomInteger;
};

// let test = [];
// for (let index = 0; index < 100; index++) {
//   test.push(getRandomInt(9, 99));
// }
// console.log(test);

/**
 * Use the function getRandomInt() to make another function called
 * getRandomItem() that takes an array as an argument and returns a
 * random element in the array. Example:
 */
const arr = ["apple", "orange", "kiwi"];

const getRandomItem = (array) => {
  let randomIndex = Math.round(Math.random() * (array.length - 1));
  // return array[randomIndex];
  return array[randomIndex];
};

// console.log(getRandomItem(arr));
