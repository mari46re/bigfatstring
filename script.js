"usestrict";

document.addEventListener("DOMContentLoaded", start);

//const og variabler for mine DOM-elementer
const input = document.querySelector("#input");
let choice = document.querySelector("#choice");
let outputBox = document.querySelector("#result");
const btn = document.querySelector("button");

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

    //Det første index[0] i det skrevne, skal være med stort
    let upperCase = inputValue[0].toUpperCase();

    //Resten af navnet svarende til index[1] i det skrevnes længde registreres
    let restOfName = inputValue.substring(1, inputValue.length);

    //Denne rest skal skrives som små bogstaver
    let lowerCase = restOfName.toLowerCase();

    outputBox.value = upperCase + lowerCase;
  } else if (choice.value == "2") {
    // If input is a full name: Find the first name
    console.log(choice.value);

    //Navnene deles op, når et mellemrum registreres. Det første navn registreres i en variabel
    let firstName = inputValue.split(" ", 1);

    //variablen vises i outputtet
    outputBox.value = `${firstName}`;
  } else if (choice.value == "3") {
    //If input is a full name: Find the length of the first name
    console.log(choice.value);

    //Navnene opdeles, og fornavnet slutter ved første melleemrum
    let firstName = inputValue.split(" ");

    //fornavnets længde, som står på index[0] af navne, registreres
    let len = firstName[0].length;

    //længden laves til en string
    let lenString = len.toString();

    //længden som string registreres i en sætning i outputtet
    outputBox.value = `The length is ${lenString} characters`;
  } else if (choice.value == "4") {
    //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string

    //det første mellemrum registreres
    let space1 = inputValue.indexOf(" ");

    //det sidste mellemrum registreres
    let space2 = inputValue.lastIndexOf(" ");

    //mellemnavnet er i mellem det første og sidste mellemrum
    let middleName = inputValue.substring(space1, space2);

    //mellemnavnet står frit, ved at trimme det for indholdet omkring det
    let middleNameTrimmed = middleName.trim();

    //Mellemnavnet vises, og der fortælles hvilket index det starter og slutter på
    outputBox.value = `Middlename: ${middleNameTrimmed}. Begins at ${space1}. Ends at ${space2}.`;

    console.log(choice.value);
  } else if (choice.value == "5") {
    //If input is a filename: Check if a filename is .png or .jpg

    //variabler skal registrere om inputtet ender med enten .jpg eller .png
    let fileNameJpg = inputValue.endsWith(".jpg");
    let fileNamePng = inputValue.endsWith(".png");

    if (fileNameJpg) {
      //hvis den ender med .jpg, skal outputtet skrive således

      outputBox.value = `The filename is a .jpg`;
    } else if (fileNamePng) {
      //hvis den ender med .png, skal outputtet skrive således

      outputBox.value = `The filename is a .png`;
    } else if (fileNameJpg == false && fileNamePng == false) {
      //hvis den ikke har nogle af endelserne, skal outputtet skrive således
      outputBox.value = `This is not a file`;
    }

    console.log(choice.value);
  } else if (choice.value == "6") {
    //If input is a password: Hide a password with the correct number of *s

    //her defineres en tom variabel
    let passw = "";

    //den får sit indhold her
    passw = passw.padEnd(inputValue.length, "*");

    //indholdet udskrives i outputtet
    outputBox.value = passw;

    console.log(choice.value);
  } else if (choice.value == "7") {
    //With any input: Make the third character uppercase

    //de første index af et navn registreres i en variabel
    let firstLetters = inputValue.substring(0, 2);

    //de tredje bogstav registreres i en variabel
    let thirdCharacter = inputValue.substring(2, 3).toUpperCase();

    //resten af navnet registreres i en variabel
    let restOfLetters = inputValue.substring(3);

    //outputtet bliver en sammensætning af disse variabler
    outputBox.value = firstLetters + thirdCharacter + restOfLetters;

    console.log(choice.value);
  } else if (choice.value == "8") {
    //With any input: Make a character uppercase, if it follows a space or a hyphen

    console.log(choice.value);
  }
}
