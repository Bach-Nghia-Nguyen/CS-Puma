/**
 * Destructuring
 */
function getAverage() {
  const obj = { x: 3.6, y: 7.8, z: 4.3 };

  const { x, y, z } = obj;

  return Math.floor((x + y + z) / 3.0);
}
// console.log(getAverage());

function getAddress() {
  let coderschool = {
    city: "HCMC",
    country: "Vietnam",
    address: {
      number: 12,
      street: "Ton Dan",
      district: "4",
    },
  };

  const {
    city,
    country,
    address: { street },
  } = coderschool;

  return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
}
// console.log(getAddress());

function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const { 0: first, 2: third, 3: fourth } = arr;
  // const [first, , third, fourth] = arr;

  return { first, third, fourth };
}
// console.log(getElements());

function getNestedElements() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];

  // const [[carrots], [, mangos], [cookies]] = food;
  const {
    0: { 0: carrots },
    1: { 1: mangos },
    2: { 0: cookies },
  } = food;

  return { carrots, mangos, cookies };
}
// console.log(getNestedElements());




