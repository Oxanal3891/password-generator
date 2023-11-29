// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Intro alert//

alert('Thank you for choosing our random password generator service!\nFor your security, we recomment that you choose a password which:\n1) is minimum 8 characters long,\n2) consists of a mixture of lower and case characters, and numbers, \n3) includes special characters.\nChoose your password parameters>>')

//Global variables
let charTypes = "";
let howLong;

// Function to prompt user for password options 
getPasswordOptions = () => {

  // Array of special characters to be included in password
  let specialCharacters = [
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
  let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Array of lowercase characters to be included in password
  let lowerCasedCharacters = [
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
  let upperCasedCharacters = [
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

  let prompts = [
    "Please enter the length of your password. It must be between 8 and 128 characters long",
    "Do you want to include lower case characters?",
    "Do you want to include upper case characters?",
    "Do you want to include numeric characters?",
    "Do you want to include special characters?"
  ];

  //Password length prompt 

  howLong = prompt(prompts[0]);

  if (howLong >= 8 && howLong <= 128 && !isNaN(howLong)) {

    //Prompt characters and note the number of character types 

    let lowerCharChoice = confirm(prompts[1]);
    if (lowerCharChoice == true) {
      charTypes += lowerCasedCharacters;
    };

    let upperCharChoice = confirm(prompts[2]);
    if (upperCharChoice == true) {
      charTypes += upperCasedCharacters;
    };

    let numberChoice = confirm(prompts[3]);
    if (numberChoice == true) {
      charTypes += numericCharacters;
    };

    let specialCharChoice = confirm(prompts[4]);
    if (specialCharChoice == true) {
      charTypes += specialCharacters;
    }

    // Check that there is at least 1 character type chosen and ask again if not

    if (charTypes === "") {
      alert("Please select at least one type of character. Please choose again.");
      return getPasswordOptions();
    }
  }

  else {
    alert("Please type in a valid length");
    return getPasswordOptions()
  }

  charTypes = String(charTypes);
  return charTypes;
};

//Initialize function
getPasswordOptions();

//Function to generate password with user input
generatePassword = () => {
  let password = "";
  for (let i = 0; i < howLong; i++) {
    password += charTypes[Math.floor(Math.random() * charTypes.length)];
  };

  return password;
}

//Initialize function

generatePassword();

alert("Thank you! Click on 'Generate Password to get your password :)")