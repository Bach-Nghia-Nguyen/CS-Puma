/**
 * Write a function that takes a number n as an argument 
 * and print out the following:
1
2 2
3 3 3
4 4 4 4
...
n n n n ... n
 */

const drawTriangle = (length) => {
  for (let i = 1; i <= length; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += `${i} `;
    }
    console.log(line);
  }
};

drawTriangle(7);

/**
 * Write a function that prints out an 8×8 grid.
 * At each position of the grid, there is either whitespace
 *  or a # character. The characters should form a chessboard.
 */
const drawGrid = (size) => {
  for (let i = 1; i <= size; i++) {
    let row = "";
    if (i % 2 === 0) {
      for (let j = 1; j <= size; j++) {
        row += "# ";
      }
    } else {
      for (let j = 1; j <= size; j++) {
        row += " #";
      }
    }
    console.log(row);
  }
};

// drawGrid(8);
