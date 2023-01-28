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

// let useNumbers = true;
// let useSymbols = true;

let numbersCheckboxEl = document.getElementById("numbers-checkbox");
let symbolsCheckboxEl = document.getElementById("symbols-checkbox");
// // Set checkboxes to same value as JavaScript
// numbersCheckboxEl.checked = useNumbers;
// symbolsCheckboxEl.checked = useSymbols;

window.addEventListener("load", function () {
  sliderEl.value = defaultValue;
  adjustLength();
});

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
  charactersToUse = characters.slice(0, 52); // Reset characters to only letters or else it will keep adding the selected array.
  if (numbersCheckboxEl.checked) {
    charactersToUse = charactersToUse.concat(characters.slice(52, 62)); // if symbols is not selected but numbers is, append numbers.
  }
  if (symbolsCheckboxEl.checked) {
    charactersToUse = charactersToUse.concat(characters.slice(63, 92)); // if symbols is selected but not numbers, append symbols.
  }
  console.log(charactersToUse);
  passwordOneEl.textContent = generatePassword(sliderEl.value);
  passwordTwoEl.textContent = generatePassword(sliderEl.value);
}

function copyToClipboard(text) {
  if (text !== "") {
    // Fields are empty by default
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);

    // Alert the copied text
    alert("Copied the text: " + text);
  }
}
