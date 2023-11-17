const generateButton = document.getElementById("generate");
const passwordText = document.getElementById("password");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()<>?,./";

function generatePassword() {
  let newPassword = "" 

  const passwordLength = parseInt(window.prompt("Enter Password Length"))


  if (passwordLength < 8 || passwordLength > 128) {
    const wrongNumber = window.confirm("Password needs to be from 8-128 characters")

    if (wrongNumber) {
      generatePassword();
      return 
    }
  }

  const wantsUpper = window.confirm("Would you like upper case letters?");
  const wantsLower = window.confirm(" Would you like lower case letters");
  const wantsNumbers = window.confirm("Would you like numbers?");
  const wantsSpecial = window.confirm("Would you like special characters?");
  
  let randomChar = "";
  
  if (wantsUpper) randomChar += upperCase;
  if (wantsLower) randomChar += lowerCase;
  if (wantsNumbers) randomChar += numbers;
  if (wantsSpecial) randomChar += specialChar;

  for (let i = 0; i < passwordLength; i++) {
    const characters = randomChar[Math.floor(Math.random() * randomChar.length)]
    newPassword += characters;
  }

  passwordText.textContent = newPassword;

}

generateButton.addEventListener("click", generatePassword);









