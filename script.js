alert('Thank you for choosing our random password generator service!\nFor your security, we recomment that you choose a password which:\n1) is minimum 8 characters long,\n2) consists of a mixture of lower and case characters, and numbers, \n3) includes special characters.\nChoose your password parameters>>')

var passwordLength = prompt('How long do you want your password to be? Enter a number between 8 and 128.');

while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { passwordLength = prompt('Invalid entry. Enter a number between 8 and 128.') };

console.log(passwordLength)

var characters = [lowerCase, upperCase, numericCharacters, specialCharacters]

  /
while (!characters.includes(true)) {
  var lowerCase = confirm("Do you want to include lower case characters?")
  var upperCase = confirm("Do you want to include upper case characters?")
  var numericCharacters = confirm("Do you want to include numeric characters?")
  var specialCharacters = confirm("Do you want to include special characters?")
};


/*
for (; ;) {
  var characters = [lowerCase, upperCase, numericCharacters, specialCharacters];
  var lowerCase = confirm("Do you want to include lower case characters?");
  var upperCase = confirm("Do you want to include upper case characters?");
  var numericCharacters = confirm("Do you want to include numeric characters?");
  var specialCharacters = confirm("Do you want to include special characters?");
  if (!characters.includes(true)) {

    alert('Select at least 1 type of characters'),
    lowerCase = confirm("Do you want to include lower case characters?")
  }
  else if (lowerCase) { upperCase = confirm("Do you want to include upper case characters?") }
  else if 
{ numericCharacters = confirm("Do you want to include numeric characters?") }
else if 
  specialCharacters = confirm("Do you want to include special characters?")


    ;
} else if () { } else {
  valid = true;
}
}





// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

* /