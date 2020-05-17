// Assignment Code
var generateBtn = document.querySelector("#generate");

//random variables

var symbols = ["!","#","$","%","&","(",")","<","=",">","?","@","[","]","^","{","|","}","~"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var passarray = [];

document.getElementById("generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

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
    symbols.push(passarray);
    }
    

    if (charNumeric) {
      numeric.push(passarray);
    }
    
    if ( charUpper) {
    upper.push(passarray);
    }

    if ( charLower) {
      lower.push(passarray);
    }
  
var newpass = passarray.String[Math.floor(Math.random()  * passarray.charLength) + 1];


console.log(newpass);


return newpass;

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


