var characterLength = 8;
var lowerCase = false;
var upperCase = false;
var numbers = false;
var specialCharacters = false;
var choice = []; 

var special= ['\u0021', '\u0023', '\u0024', '\u0025', '\u0026', '\u002A', '\u002B', '\u003C', '\u003F', '\u003E', '\u003D', '\u0040', '\u005E', '\u007B', '\u007D'];

var lowerCase = ['\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067', '\u0068', '\u0069', '\u006A', '\u006B', '\u006C', '\u006D', '\u006E', '\u006F', '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077', '\u0078', '\u0079', '\u007A'];
var upperCase = ['\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047', '\u0048', '\u0049', '\u004A', '\u004B', '\u004C', '\u004D', '\u004E', '\u004F', '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057', '\u0058', '\u0059', '\u005A'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  choice = [];
  var passwordText = document.querySelector("#password");
  var correctPrompt = getPrompts();
  if (correctPrompt) {
    var password = generatePassword();
    passwordText.value = password;
    passwordText.setAttribute("class", "password");
  } else {
    passwordText.value = "";
    passwordText.setAttribute("class", "");
  }
}
function generatePassword() {
  var password = "";
  for (let i = 0; i < characterLength; i++) {
    var randomLetter = (Math.floor(Math.random() * choice.length));
    password += choice[randomLetter];
  }
  return password;
}
function getPrompts() {
  characterLength = parseInt(prompt("Hello! How many characters do you want your Password to be (8-128)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Come On! Invalid amount of character. TRY AGAIN!")
    return false;
  }
  if (confirm("Do you want to add lowercase characters")) {
    choice= choice.concat(lowerCase);
  }
  if (confirm("So you want to add UPPERCASE characters")) {
    choice = choice.concat(upperCase);
  }
  if (confirm("So you want to add Number characters?")) {
    
    choice = choice.concat(numbers);
  }
  if (confirm("Do you want to add Special characters?")) {
    choice = choice.concat(special);
  }
  return true;
}
