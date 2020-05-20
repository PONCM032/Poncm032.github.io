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
  //.concat
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

  //var newpass = String[Math.floor(Math.random()  * passarray.charlength) + 1];  
  //  var arrayJSON = JSON.stringify(passarray);

  for (var i = 0; i < charLength; i++) {
    var randomChar = passarray[Math.floor(Math.random() * passarray.length)];
    password = password + randomChar;
  }
  //console.log(passwordText);
  passwordText.textContent = password;


  // for (let password of randomarray){
  // let pusharray = document.getElement("textarea");
  //  pusharray.textcontent = password;
  //  password.appendChild(pusharray);
  // }

  console.log(passarray);
}


//  function generatePassword(passarray) {
//     var lenght = 8;
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     for (var i = 0; i < charset.length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));

//   } };

// function generate(){

//  var length = document.getElementById("myRange").value;
//  var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
//  var password = "";


//  for(var i = 0; i <= length; i++){
//      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//  }


//     document.getElementById("viewerPoint").value = password;

//  }
//  document.getElementById("range").innerHTML = "Length: 8";

//   document.getElementById("myRange").oninput = function(){
//    if(document.getElementById("myRange").value > 0){
//        document.getElementById("range").innerHTML = "Length: " + document.getElementById("myRange").value;
//    }
//    else{
//         document.getElementById("range").innerHTML = "Length: 1";
//    }
//  };


