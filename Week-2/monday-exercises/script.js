/**
 * 2. Area of a circle
 */
// console.log("Area of a circle");

// const pi = 3.14;
// console.log(typeof pi);

// let radius = 5;
// console.log(typeof radius);

// let area = pi * radius ** 2;

// console.log(
//   "The area of circle given the radius " + radius + " (m) is " + area + " (m2)"
// );

// radius = 7;

// area = pi * radius ** 2;

// console.log(
//   `The area of circle given the radius ${radius} (m) is ${area} (m2)`
// );

/**
 * 3. Operators & Comparison
 */

// console.log("Coder" + "School");

// 10 + 24;              // => 34
// "10" + "24";          // => "1024"
// "Hello" + " " + 2021; // => "Hello 2021"
// 1 + 2 * 3;            // => 7
// (1 + 3) ** 2;         // => 16
// 1 / 0;                // => Infinity
// 6 % 2;                // => 0
// 5.5 % 2;              // => 1.5
// Number("123");        // => 123
// typeof (1 + "");      // => "string"

// 5 == "5";                // => true
// 5 === "5";               // => false
// 8 != 8.0;                // => false
// 8 !== 8.0;               // => false
// "true" === true;         // => false
// 4 <= 4.0;                // => true
// 7 >= 7;                  // => true
// true && true;            // => true
// true && false;           // => false
// true || true;            // => true
// false || true;           // => true
// !true;                   // => false
// !false;                  // => true
// false && (true || true); // => false
// (false && true) || true; // => true

/**
 * 4. Conditionals
 */
// let x = 20;

// function whatNumberItIs(number) {
//   if (number === 0) {
//     return `${number} is zero`;
//   } else if (number < 0) {
//     return `${number} is a negative number`;
//   } else {
//     return `${number} is a positive number`;
//   }
// }

// console.log(whatNumberItIs(x));

// let a = 45,
//   b = 14,
//   c = 78;

// function findMinMax(num1, num2, num3) {
//   let biggest = Math.max(num1, num2, num3);
//   let smallest = Math.min(num1, num2, num3);

//   return `${smallest} is the smallest number, and ${biggest} is the biggest number among ${num1}, ${num2}, ${num3}`;
// }

// console.log(findMinMax(a, b, c));

/**
 * 5. Loops
 */

//  function rangeInclusive(a, b) {
//   var output = "";
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       output += `${i} `;
//     }
//   } else if (a > b) {
//     for (let i = a; i >= b; i--) {
//       output += `${i} `;
//     }
//   }
//   console.log(output);
// }
// rangeInclusive(1, 5);
// rangeInclusive(8, 4);

// function sumOfRange(x, y) {
//   var sum = 0;
//   if (x < y) {
//     for (let i = x; i <= y; i++) {
//       sum += i;
//     }
//   } else if (x > y) {
//     for (let i = x; i >= y; i--) {
//       sum += i;
//     }
//   }
//   console.log(`Sum of numbers from ${x} to ${y} is: ${sum}`);
// }
// sumOfRange(1, 10);

// function sumOfDigits(x) {
//   var remainder;
//   var sum = 0;
//   var le = x.toString().length;
//   var xnum = parseInt(x);
//   for (let i = 1; i <= le; i++) {
//     remainder = xnum % 10;
//     xnum = (xnum - remainder) / 10;
//     sum += remainder;
//   }
//   return console.log(sum);
// }
// sumOfDigits(1037);

/**
 * 6. Functions
 */

// function wow() {
//   console.log("Wow, it worked!");
// }
// wow();

// function movie() {
//   console.log("My favorite movies are John Wick series");
// }
// movie();

// function myName(name) {
//   console.log(`My name is ${name}`);
// }
// myName("Nghia");

// function rangeInclusive(a, b) {
//   var output = "";
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       output += `${i} `;
//     }
//   } else if (a > b) {
//     for (let i = a; i >= b; i--) {
//       output += `${i} `;
//     }
//   }
//   console.log(output);
// }
// rangeInclusive(1, 5);
// rangeInclusive(8, 4);

/**
 * 7. Swapping values of two bindings
 */

// function swapTemp(a, b) {
//   console.log(`Before swapping, a is ${a}, b is ${b}`);
//   var temp;
//   temp = a;
//   a = b;
//   b = temp;
//   console.log(`After swapping, a is ${a}, b is ${b}`);
// }
// swapTemp(10, 2738);

// function swapNoThird(a, b) {
//   console.log(`Before swapping, a is ${a}, b is ${b}`);
//   [a, b] = [b, a];
//   console.log(`After swapping, a is ${a}, b is ${b}`);
// }
// swapNoThird(19, "on");

/**
 * 8. Random number
 */

// console.log(Math.random());

// console.log(Math.round(Math.random() * 10));
