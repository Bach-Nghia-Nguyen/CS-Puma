let userA = {
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
  tasks: [
    { name: "Task 1", status: "Done" },
    { name: "Task 2", status: "Not Started" },
    { name: "Task 3", status: "In Progress" },
    { name: "Task 4", status: "Not Started" },
    { name: "Task 5", status: "Done" },
    { name: "Task 6", status: "In Progress" },
    { name: "Task 7", status: "Not Started" },
    { name: "Task 8", status: "Done" },
    { name: "Task 9", status: "Done" },
    { name: "Task 10", status: "In Progress" },
  ],
};

/**
 * How many key/value pairs does the object have?
 */
const howManyKeys = (object) => {
  return Object.keys(object).length;
};
// console.log(howManyKeys(userA));

/*
 * What is the type of the value of the key id and courseId?
 */
const valueTypeOfKey = (object, key) => {
  if (object[key]) {
    return typeof object[key];
  } else {
    return "Property not found";
  }
};
// console.log(valueTypeOfKey(userA, "id"));
// console.log(valueTypeOfKey(userA, "courseId"));

/**
 * How can we change the value of the key email to pparker@gmail.com?
 */
const changeValueOfKey = (object, key, newValue) => {
  if (object instanceof Object) {
    object[key] = newValue;
    return object;
  } else {
    return "Invalid";
  }
};
// console.log(changeValueOfKey(userA, "email", "ppparker@gmail.com"));

const greeting = (object) => {
  if (object instanceof Object && object["name"] && object["email"]) {
    return `Hi, my name is ${object.name}, my email is ${object.email}`;
  } else {
    return "Invalid";
  }
};
// console.log(greeting(userA));

/**
 * Write a function called listOfTask() that takes
 * in a user object like this and print out 3 lists
 * of tasks that are "Not Started", "In Progress",
 * and "Done", respectively. Example:
 */

const listOfTask = (object = userA) => {
  if (object instanceof Object === false || !object["tasks"]) return "Invalid";

  let taskList = object["tasks"];

  console.log("Not Started:");
  taskList
    .filter((task) => task.status === "Not Started")
    .forEach((task) => console.log(`- ${task.name}`));

  console.log("In Progress:");
  taskList
    .filter((task) => task.status === "In Progress")
    .forEach((task) => console.log(`- ${task.name}`));

  console.log("Done:");
  taskList
    .filter((task) => task.status === "Done")
    .forEach((task) => console.log(`- ${task.name}`));
};

// listOf Task();

/**
 * Create a function called generateFakeTasks() that
 *  returns an array of n number of tasks (n is the
 * argument). The fake tasks use this object below
 * as a template. The name of a task starts with
 * "Task " followed by an index. The index starts
 * from 1. The value of status is a random choice
 *  between "In progress", "Not Started", "Done"
 * (Hint: use the function getRandomItem() in Assignment 1).
 */

const generateFakeTasks = (amount) => {
  let taskArray
  return
};
