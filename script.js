
//Intro alert//

alert('Thank you for choosing our random password generator service!\nFor your security, we recomment that you choose a password which:\n1) is minimum 8 characters long,\n2) consists of a mixture of lower and case characters, and numbers, \n3) includes special characters.\nChoose your password parameters>>')



// Function to prompt user for password options 

let getPasswordOptions = function () {

  //Declare a user choice object and a prompts object
  let userChoices = [];

  const prompts = [
    "Please enter the length of your password. It must be between 8 and 128 characters long",
    "Do you want to include lower case characters?",
    "Do you want to include upper case characters?",
    "Do you want to include numeric characters?",
    "Do you want to include special characters?"
  ];

  //Declare a variable for a number of character types

  let charTypes = "";

  //Declare an array of randomly selected characters:

  let characters = [];

  //Password length prompt 

  let length = prompt(prompts[0]);

  if (length >= 8 && length <= 128 && !isNaN(length)) {

    //Prompt characters, note the number of character types and select at random if this type is chosen

    let lowerCharChoice = prompt(prompt[1]);
    if (lowerCharChoice) {
      charTypes += lowerCasedCharacters;
      characters.push(getRandom(lowerCasedCharacters))
    }

    let upperCharChoice = prompt(prompt[2]);
    if (upperCharChoice) {
      charTypes += upperCasedCharacters;
      characters.push(getRandom(upperCasedCharacters))
    }

    let numberChoice = prompt(prompt[3]);
    if (numberChoice) {
      charTypes += numericCharacters;
      characters.push(getRandom(numericCharacters))
    }

    let specialCharChoice = prompt(prompt[4]);
    if (specialCharChoice) {
      charTypes += specialCharacters;
      characters.push(getRandom(specialCharacters))
    }

    // Check that there is at least 1 character type chosen and ask again if not

    if (!charTypes) {
      alert("Please select at least one type of character");
      return getPasswordOptions();
    };

    // Add random from the chosen character types if the there is not enough chcarters chosen at random
    while (characters.length < length) {
      characters.push(getRandom(charTypes));
    };

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

    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

  }
}


/*
// Function to generate password with user input
function generatePassword() {

}
*/

//Function for getting a random element from an array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let item = arr[randomIndex];

  return item;
}

/*

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

*/