// Assignment Code
var generateBtn = document.querySelector("#generate");

//random variables

var symbols = ["!", "#", "$", "%", "&", "(", ")", "<", "=", ">", "?", "@", "[", "]", "^", "{", "|", "}", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passarray = [];
var password = "";

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  //Parent Element
  var passwordText = document.getElementById("password")
  console.log(passwordText)
  //passwordText.value = password; 

  var charLength = prompt("Please confirm character lenght between 8 and 128 characters.");
  while (charLength < 8 || charLength > 128) {
    charLength = prompt("Please pick a number greater than 8 or less than 128");
  }

  var charSpecial = confirm("Would you like to have special characters in your password?");
  var charNumeric = confirm("Would you like to have numeric values in your password?");
  var charUpper = confirm("Would you like to have uppercase characters in your password?");
  var charLower = confirm("Would you like to have lowercase characters in your password?");
  //2a at least one has to be true
  if (charSpecial) {
    passarray = passarray.concat(symbols);
  }
  if (charNumeric) {
    passarray = passarray.concat(numeric);
  }
  if (charUpper) {
    passarray = passarray.concat(upper);
  }
  if (charLower) {
    passarray = passarray.concat(lower);
  }
  if(charSpecial === false && charNumeric === false && charUpper === false && charLower === false){
    alert("Please click Generate Password button again and pick at least one condition to be true");
  }

  for (var i = 0; i < charLength; i++) {
    var randomChar = passarray[Math.floor(Math.random() * passarray.length)];
    password = password + randomChar;
  }
  passwordText.textContent = password;
}

