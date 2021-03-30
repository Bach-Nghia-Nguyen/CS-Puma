const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

/**
 * Use filter() to: Print out an array of the
 * inventors whose name starts with ‘A'.
 */
const nameStartWithA = inventors.filter((name) => name[0] === "A");
// console.log(nameStartWithA);

/**
 * Use filter() to: Print out an array of the inventors
 * whose first name and last name start with the same
 * letter. For example, "Galileo Galilei" or "Hanna Hammarstrom"
 */
const sameLetter = inventors.filter((name) => {
  let firstName = name.split(" ")[0];
  let lastName = name.split(" ")[1];
  return firstName[0] === lastName[0];
});
// console.log(sameLetter);

/**
 * Use sort() to: Sort all the inventors in alphabetical order, A-Z.
 */
function alphabeticalOrder(array) {
  if (array instanceof Array) {
    let localArray = [...array];
    localArray.sort();
    return localArray;
  } else {
    return "Invalid";
  }
}
// console.log(alphabeticalOrder(inventors));

/**
 * Use sort() to: Sort all the inventors by length of name,
 * shortest name first.
 */
function sortByLength(array) {
  if (array instanceof Array) {
    let localArray = [...array];
    localArray.sort((name1, name2) => name1.length - name2.length);
    return localArray;
  } else {
    return "Invalid";
  }
}
// console.log(sortByLength(inventors));

/**
 * Use map() to: Print out an array of the length of every
 * inventor's full name.
 */
const lengthOfFullName = inventors.map((name) => name.length);
// console.log(lengthOfFullName);

/**
 * Use map() to: Print out an array of all the inventors' names
 * in uppercase.
 */
const nameInUppercase = inventors.map((name) => name.toUpperCase());
// console.log(nameInUppercase);

/**
 * Use reduce() to: Create a string that has the first name of
 * every inventor. ("Albert Issac Galileo ...")
 */
const firstNameString = inventors.reduce((accumulate, currentName) => {
  return accumulate + currentName.split(" ")[0] + " ";
}, "");
// console.log(firstNameString);

/**
 * Use reduce() to: Calculate sum of the length of all inventer's names.
 */
const sumOfLength = inventors.reduce((accumulate, currentName) => {
  return accumulate + currentName.length;
}, 0);
// console.log(sumOfLength);
