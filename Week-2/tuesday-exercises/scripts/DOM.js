/**
 * Change text in the first box 3 seconds after the page loads.
 */
const changeText = document.getElementById("change-text");

const changeThisText = () => (changeText.innerHTML = "I HAVE CHANGED");
window.addEventListener("load", () => {
  setTimeout(changeThisText, 3000);
});

/**
 * Increment the count in the next box every second.
 */
const changeCount = document.getElementById("change-count");

window.addEventListener("load", () => {
  let second = 1;
  setInterval(() => {
    changeCount.innerHTML = `${second}`;
    second += 1;
  }, 1000);
});

/**
 * Change the color & text inside the next box every 3 seconds.
 */
const ColorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

const changeColor = document.getElementById("change-color");

const changeBackgroundColorAndText = () => {
  let randomColorInDex = Math.round(Math.random() * (ColorNames.length - 1));
  changeColor.style.backgroundColor = ColorNames[randomColorInDex];
  changeColor.innerHTML = ColorNames[randomColorInDex];
};

window.addEventListener("load", () => {
  setInterval(changeBackgroundColorAndText, 3000);
});

/**
 * Increment the count in the next box when when clicked.
 */
const changeClick = document.getElementById("change-click");
let changeClickNumber = 1;

changeClick.addEventListener("click", () => {
  changeClick.innerHTML = `${changeClickNumber}`;
  changeClickNumber += 1;
});

/**
 * Increment the count in the next box when when hovered.
 */
const changeHover = document.getElementById("change-hover");
let changeHoverNumber = 1;

changeHover.addEventListener("mouseenter", () => {
  changeHover.innerHTML = `${changeHoverNumber}`;
  changeHoverNumber += 1;
});

/**
 * Switch between loves my and not loves me
 * when the next box is clicked.
 */
const toggleClick = document.getElementById("change-he-loves-me");
let switchOnOff = false;

toggleClick.addEventListener("click", () => {
  switchOnOff = !switchOnOff;
  if (switchOnOff == true) {
    toggleClick.innerHTML = "He Loves Me";
  } else {
    toggleClick.innerHTML = "He Love Me Not";
  }
});

/**
 * Show the time inside the next box when clicked.
 */
const changeToCurrentDate = document.getElementById("change-to-current-date");

const displayTime = () => {
  let now = new Date();
  return now;
};

// changeToCurrentDate.addEventListener("click", () => {
//   changeToCurrentDate.innerHTML = displayTime;
// });

window.addEventListener("load", () => {
  setInterval(() => (changeToCurrentDate.innerHTML = displayTime()), 1000);
});

/**
 * Show the width & height of the next box when the window is resized.
 */
const windowWidthDisplay = document.getElementById("change-to-current-width");
const windowHeightDisplay = document.getElementById("change-to-current-height");

const displayWindowSize = () => {
  windowWidthDisplay.innerHTML = window.innerWidth;
  windowHeightDisplay.innerHTML = window.innerHeight;
};

window.addEventListener("resize", displayWindowSize);

/**
 * Add a new li element that's numbered correctly
 * when its clicked in the next box.
 */
const addListItem = document.getElementById("add-list-item");
let orderListNumber = 2;

const displayList = (event) => {
  if (orderListNumber < 8) {
    let list = document.createElement("li");
    list.innerHTML = `This is a new li element number ${orderListNumber}`;
    addListItem.appendChild(list);
    orderListNumber += 1;
  } else if (orderListNumber == 8) {
    let list = document.createElement("li");
    list.innerHTML = `Enough. You cannot click this any more`;
    addListItem.appendChild(list);
    orderListNumber += 1;
  }
};

addListItem.addEventListener("click", displayList);

/**
 * Show the current URL of the webpage when the next box is clicked.
 */
const changeToURL = document.getElementById("change-to-url");
changeToURL.addEventListener("click", (event) => {
  changeToURL.innerHTML = document.URL;
});

/**
 * Add some typewriteing when the next box is clicked.
 */
const changeCoderscript = document.getElementById("change-coderscript");

changeCoderscript.addEventListener("click", () => {
  changeCoderscript.innerHTML = "";
  let index = 0;
  let text = "Hello world! My name is Nguyen Bach Nghia! I am a web developer.";
  let typeSpeed = 45;
  const typeWriting = () => {
    if (index < text.length) {
      changeCoderscript.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriting, typeSpeed);
    }
  };
  typeWriting();
});
