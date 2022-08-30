"usestrict";

document.addEventListener("DOMContentLoaded", start);

const input = document.querySelector("#input");
let choice = document.querySelector("#choice");
let outputBox = document.querySelector("#result");
const btn = document.querySelector("button");

let result;

function start() {
  choice.value;

  btn.addEventListener("click", generateOutput);
}

function generateOutput() {
  let inputValue = input.value;
  console.log("clicked");
  if (choice.value == "1") {
    //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    console.log(choice.value);

    let upperCase = inputValue[0].toUpperCase();
    let restOfName = inputValue.substring(1, inputValue.length);
    let lowerCase = restOfName.toLowerCase();

    outputBox.value = upperCase + lowerCase;
  } else if (choice.value == "2") {
    // If input is a full name: Find the first name
    console.log(choice.value);

    let firstName = inputValue.split(" ", 1);

    outputBox.value = `${firstName}`;
  } else if (choice.value == "3") {
    //If input is a full name: Find the length of the first name
    console.log(choice.value);

    let firstName = inputValue.split(" ");
    let len = firstName[0].length;
    let lenString = len.toString();

    outputBox.value = `The length is ${lenString} characters`;
  } else if (choice.value == "4") {
    //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
    let space1 = inputValue.indexOf(" ");
    let space2 = inputValue.lastIndexOf(" ");
    let middleName = inputValue.substring(space1, space2);
    let middleNameTrimmed = middleName.trim();

    outputBox.value = `Middlename: ${middleNameTrimmed}. Begins at ${space1}. Ends at ${space2}.`;

    console.log(choice.value);
  } else if (choice.value == "5") {
    //If input is a filename: Check if a filename is .png or .jpg
    let fileNameJpg = inputValue.endsWith(".jpg");
    let fileNamePng = inputValue.endsWith(".png");

    if (fileNameJpg) {
      outputBox.value = `The filename is a .jpg`;
    } else if (fileNamePng) {
      outputBox.value = `The filename is a .png`;
    } else if (fileNameJpg == false && fileNamePng == false) {
      outputBox.value = `This is not a file`;
    }

    console.log(choice.value);
  } else if (choice.value == "6") {
    //If input is a password: Hide a password with the correct number of *s

    let passw = "";
    passw = passw.padEnd(inputValue.length, "*");

    outputBox.value = passw;

    console.log(choice.value);
  } else if (choice.value == "7") {
    //With any input: Make the third character uppercase
    let firstLetters = inputValue.substring(0, 2);
    let thirdCharacter = inputValue.substring(2, 3).toUpperCase();
    let restOfLetters = inputValue.substring(3);

    outputBox.value = firstLetters + thirdCharacter + restOfLetters;

    console.log(choice.value);
  } else if (choice.value == "8") {
    //With any input: Make a character uppercase, if it follows a space or a hyphen

    console.log(choice.value);
  }
}
