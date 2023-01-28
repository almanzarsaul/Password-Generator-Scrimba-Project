const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordOneEl = document.getElementById("password-field-one");
let passwordTwoEl = document.getElementById("password-field-two");
let sliderEl = document.getElementById("length-slider");
let lengthValueEl = document.getElementById("length-value")
let defaultValue = 11;

window.addEventListener("load", function() {
    sliderEl.value = defaultValue;
    adjustLength()
})

function adjustLength() {
    lengthValueEl.textContent = sliderEl.value;
}

function generatePassword(lengthOfPassword) {
    let password = ""
    for (let i=0; i < lengthOfPassword; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length); // Gets a random index based on the length of the characters array
        password += characters[randomIndex];
    }
    return password;
}

function getPasswords() {
    passwordOneEl.textContent = generatePassword(sliderEl.value);
    passwordTwoEl.textContent = generatePassword(sliderEl.value);
}

