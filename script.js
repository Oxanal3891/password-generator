
//Intro alert//

alert('Thank you for choosing our random password generator service!\nFor your security, we recomment that you choose a password which:\n1) is minimum 8 characters long,\n2) consists of a mixture of lower and case characters, and numbers, \n3) includes special characters.\nChoose your password parameters>>')

//Declare user choice object and a prompts object

let userChoices = [];

const prompts = [
  "Please enter the length of your password. It must be between 8 and 128 characters long",
  "Do you want to include lower case characters?",
  "Do you want to include upper case characters?",
  "Do you want to include numeric characters?",
  "Do you want to include special characters?"
];
//Declare a character options object by joining various character arrays ()

const charOptions = {
  specialChar: "@%+\/'!#$^?:,)(}{][~-_.",
  lowerCasedChar:
}

//Declare password choices 

let passwordChoices = "";

//Password length prompt and validation

while (true) {
  let length = prompt(prompts[0]);
  if (length >= 8 && length <= 128 && !isNaN(length)) { break; }
};




//Characters prompts and validation

let specialCharChoice = prompt(prompt[1]);
if (specialCharChoice) { }



/*
var char = [];
 
do {
  for (i = 1; i < prompts.length; i++) {
    char.push(confirm(prompts[i]));
    userChoices.splice(1, 4, char);
    break;
  }
}
while (!userChoices.includes(true))
 
//userChoices.fill(x,1,5)
 
//userChoices.splice(1, 4, input)
 
 
 
 
 
/*
prompt(prompts[0]);
if (long > 8 && long < 128 && !isNaN(long)) { userChoices.long = long; break; }
else { alert('Invalid entry. Enter a number between 8 and 128.') }
};
 
 
function askPrompts() {
for (i = 0; i < promptArr.length; i++) {
 var k = confirm(promptArr[i]);
 values.push(k);
 break;
}
}
 
while (!values.includes(true)) {
askPrompts()
}
}
 
console.log(values)
/*
do {
alert("You need to choose at least type of characters. Please make your character choices again")
}
while (!values.includes(true));
 
/*
for (var t = 0; t < promptArr.length; t++) {
var k = prompt(promptArr[t]);
if (k == null) {
 break;
}
else {
 values.push(k);
}
}
* /
 
 
 
 
 
for (i = 0; i < promptArr.length; i++) {
var k = confirm(promptArr[i]);
values.push(k);
if (promptArr.includes(true)) {
 values.push(k);
}
else {
 alert('Select at least 1 type of characters');
 values.push(k);
}
}
 
if (!valid) {keep going through loop }

*/



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

console.log(specialCharacters.join(""));

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(numericCharacters.join(""));

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

console.log(lowerCasedCharacters.join(""));

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

console.log(upperCasedCharacters.join(""));

/*
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

*/