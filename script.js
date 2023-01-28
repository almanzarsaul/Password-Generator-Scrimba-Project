const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let charactersToUse = characters.slice(0, 52); // User always uses letters at least.
let passwordOneEl = document.getElementById("password-field-one");
let passwordTwoEl = document.getElementById("password-field-two");
let sliderEl = document.getElementById("length-slider");
let lengthValueEl = document.getElementById("length-value");
let defaultValue = 16;

let useSymbols = false;
let useNumbers = true;

window.addEventListener("load", function () {
  sliderEl.value = defaultValue;
  adjustLength();
});

// 91 total characters
// 52 letters [0-51]
// 10 numbers [52-62]
// 30 symbols [63-92]
if (useSymbols === true && useNumbers === false) {
  charactersToUse = charactersToUse.concat(characters.slice(63, 92)); // if symbols is selected but not numbers, append symbols.
} else if (useSymbols === false && useNumbers === true) {
  charactersToUse = charactersToUse.concat(characters.slice(52, 62)); // if symbols is not selected but numbers is, append numbers.
} else {
  charactersToUse = characters; // if both are selected, just use all characters
}

function adjustLength() {
  lengthValueEl.textContent = sliderEl.value;
}

function generatePassword(lengthOfPassword) {
  let password = "";
  for (let i = 0; i < lengthOfPassword; i++) {
    let randomIndex = Math.floor(Math.random() * charactersToUse.length); // Gets a random index based on the length of the characters array
    password += charactersToUse[randomIndex];
  }
  return password;
}

function getPasswords() {
  passwordOneEl.textContent = generatePassword(sliderEl.value);
  passwordTwoEl.textContent = generatePassword(sliderEl.value);
}

function copyToClipboard(text) {
  if (text !== "") {
    // Fields are empty by default
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);

    // Log the copied text
    console.log("Copied the text: " + text);
  }
}
