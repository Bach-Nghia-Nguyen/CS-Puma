/**
 * Group A
 */
// 4 other methods to add new elements into the array:

// Method 1: concat()
// E.g
let arr7 = [true, false, null];
let arr98 = [1, 0, "go"];
let arr100 = arr7.concat(arr98);
// console.log(arr100);

// spread operator ...
// E.g
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr = [...arr1, ...arr2];
// console.log(arr);

// unshift(),
const arr56 = [1, 2, 3, 4, 5];
const arr4 = ["time", "space", "power"];
arr56.unshift(...arr4);
// console.log(arr56);
// array[index] = someValue
// E.g
// const global = [1, 2, true, "mac"];
// global[4] = "Jep";
// console.log(global);

const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newAnimals = [];

// console.log(animals.slice(2));
// console.log(animals);

/**
 * Group D
 */
/**
 * In While Loop, the condition tests before the loop body, and
 * if the condition is true, the code inside body will run
 *
 * In Do While Loop, the Body is placed before the condition. So it's
 * alway run at least once even if the condition already fails.
 */

let users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Pete", age: 14 },
  { id: 3, name: "Mary", age: 60 },
];
// console.log(users.sort((personA, personB) => personA.age - personB.age));

function sortThis() {
  for (let index = 0; index < users.length - 1; index++) {
    if (users[index].age > users[index + 1].age) {
      [users[index], users[index + 1]] = [users[index + 1], users[index]];
    }
  }
  return users;
}
// console.log(sortThis());

let myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 1);
console.log(myFish);
