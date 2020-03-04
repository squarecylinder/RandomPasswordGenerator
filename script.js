// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate the random password
function generatePassword() {
  // creating the types of characters to be set in the password
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", '"', ";", "'", ",", ".", "/", "<", ">", "?", "`", "`", "[", "]"];
  var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // creating empty arrays that will be filled with random characters
  var newLowerChar = [];
  var newUpperChar = [];
  var newSpecChar = [];
  var newNumChar = [];
  var randPass = [];
  var newRandPass = [];
  // Prompting the user to enter a password length
  var passwordLength = prompt("How long do you want your password to be? (8-128 characters long)");
  // Validating the password length
  if(passwordLength < 8 || passwordLength > 128){
    alert("You need to chose a length between 8 - 128 characters long");
    return generatePassword();
  }
  // Setting the criteria for the password
  else {
    var passwordLower = confirm("Do you need lowercase characters?");
    var passwordUpper = confirm("Do you need uppercase characters?");
    var passwordSpecial = confirm("Do you need special characters?");
    var passwordNumerical = confirm("Do you need numerical characters?");
  }
  // creating random lowercase array
  if(passwordLower){
    for(i = 0; i < passwordLength; i++){
    var randLower = Math.floor(Math.random() * lowerChar.length);
    newLowerChar.push(lowerChar[randLower]);
    randPass.push(newLowerChar);
    }
  }
  // Creating random uppercase array
  if(passwordUpper){
    for(i = 0; i < passwordLength; i++){
    var randUpper = Math.floor(Math.random() * upperChar.length);
    newUpperChar.push(upperChar[randUpper]);
    randPass.push(newUpperChar);
    }
  }
  // Creating random special array
  if(passwordSpecial){
    for(i = 0; i < passwordLength; i++){
    var randSpec = Math.floor(Math.random() * specChar.length);
    newSpecChar.push(specChar[randSpec]);
    randPass.push(newSpecChar);
    }
  }
  // Creating random numerical array
  if(passwordNumerical){
    for(i = 0; i < passwordLength; i++){
    var randNum = Math.floor(Math.random() * numChar.length);
    newNumChar.push(numChar[randNum]);
    randPass.push(newNumChar);
    }
  }

  // console.log(newLowerChar);
  // console.log(newUpperChar);
  // console.log(newSpecChar);
  // console.log(newNumChar);
  // console.log(randPass);
  // console.log(newRandPass);
  // Creating the newRandPass by picking a random array in the randPass and picking a random index of that random array and looping
  
  for(i = 0; i < passwordLength; i++){
    var randChar = Math.floor(Math.random() * randPass.length);
    var randIndex = Math.floor(Math.random() * passwordLength);
    newRandPass.push(randPass[randChar][randIndex]);
  }
  // Prints out the array that has everything without commas seperating them because a comma can be part of the password!
  return newRandPass.join("");
}
