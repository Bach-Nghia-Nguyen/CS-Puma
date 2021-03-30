/**
 * Rest and Spread
 */
function restParameters(first, ...rest) {
  return rest[0] === 1 && rest[1] === 2;
}
// console.log(restParameters(0, 1, 2));

function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};

  [object.one, object.two, object.three, ...object.rest] = array;

  return object;
}
// console.log(ontoAnObject());

function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];

  return Math.max(...arr1, ...arr2);
}
// console.log(findTheMax());

function concatenateArrays() {
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const result = [...arr1, ...arr2, ...arr3];
  // const result = arr1.concat(arr2, arr3);

  return result;
}
// console.log(concatenateArrays());

function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };
  const result = { ...obj1, ...obj2 };

  return (
    result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g === "g from obj2" &&
    result.d.h === "h from obj2"
  );
}
// console.log(mergeObjects());
