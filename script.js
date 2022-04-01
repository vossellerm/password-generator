// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  var password = "";
  var letter = "";
  var candidates = "";

  // TODO: add code to generate the password here
  let length = prompt("Enter password length");
  if (length < 8 || length > 128) {
    alert("Password should be from 8 to 128 characters long.");
    return "";
  }

  let includeLower = "Use lowercase letters?";
  if (confirm(includeLower)) {
    for (let i = 0; i < 1; i++) {
      letter = Math.floor(Math.random() * lowercase.length);
      password += lowercase.substring(letter, letter + 1);
    }
    candidates += lowercase;
  }

  let includeUpper = "Use uppercase letters?";
  if (confirm(includeUpper)) {
    for (let i = 0; i < 1; i++) {
      letter = Math.floor(Math.random() * uppercase.length);
      password += uppercase.substring(letter, letter + 1);
    }
    candidates += uppercase;
  }
  let includeSpecial = "Use special characters?";
  if (confirm(includeSpecial)) {
    for (let i = 0; i < 1; i++) {
      letter = Math.floor(Math.random() * uppercase.length);
      password += specialChars.substring(letter, letter + 1);
    }
    candidates += specialChars;
  }

  let includeNumber = "Use numbers?";
  if (confirm(includeNumber)) {
    for (let i = 0; i < 1; i++) {
      letter = Math.floor(Math.random() * numbers.length);
      password += numbers.substring(letter, letter + 1);
    }
    candidates += numbers;
  }

  if (candidates.length === 0) {
    alert("You must choose at least one character type.");
    return "";
  }

  while (password.length < length) {
    for (let i = 0; i < 1; i++) {
      letter = Math.floor(Math.random() * candidates.length);
      password += candidates.substring(letter, letter + 1);
    }
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
