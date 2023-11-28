// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Intro alert//

alert('Thank you for choosing our random password generator service!\nFor your security, we recomment that you choose a password which:\n1) is minimum 8 characters long,\n2) consists of a mixture of lower and case characters, and numbers, \n3) includes special characters.\nChoose your password parameters>>')

const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += key_strings.symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
};

/*
//Global vaariables

var password = "";

var charTypes = "";

//Function to generate password with user input
function generatePassword() {

  //Declare a user choice array

  for (let i = 0; i < charTypes.length; i++) {
    password += charTypes[Math.floor(Math.random() * charTypes.length)];
  };

  return password;
}



// Function to prompt user for password options 
var getPasswordOptions = function () {

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

  // Prompts array

  var prompts = [
    "Please enter the howLong of your password. It must be between 8 and 128 characters long",
    "Do you want to include lower case characters?",
    "Do you want to include upper case characters?",
    "Do you want to include numeric characters?",
    "Do you want to include special characters?"
  ];

  //Password howLong var and prompt 

  var howLong = window.prompt(prompts[0]);

  if (howLong >= 8 && howLong <= 128 && !isNaN(howLong)) {

    //Prompt characters and note the number of character types 

    let lowerCharChoice = window.prompt(prompts[1]);
    if (lowerCharChoice) {
      charTypes += String(lowerCasedCharacters);
    };

    let upperCharChoice = prompt(prompts[2]);
    if (upperCharChoice) {
      charTypes += String(upperCasedCharacters);
    };

    let numberChoice = prompt(prompts[3]);
    if (numberChoice) {
      charTypes += String(numericCharacters);
    };

    let specialCharChoice = prompt(prompts[4]);
    if (specialCharChoice) {
      charTypes += String(specialCharacters);
    };

    // Check that there is at least 1 character type chosen and ask again if not

    if (!charTypes) {
      alert("Please select at least one type of character");
      return getPasswordOptions();
    };
    return String(charTypes);
  }

  else { alert("Please type in a valid length") }
}