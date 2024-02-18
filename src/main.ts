const lengthp = document.getElementById(`Length`) as HTMLInputElement;
const uppercaseON = document.getElementById(`Uppercase`) as HTMLInputElement;
const lowercaseON = document.getElementById(`Lowercase`) as HTMLInputElement;
const numbersON = document.getElementById(`Numbers`) as HTMLInputElement;
const symbolsON = document.getElementById(`Symbols`) as HTMLInputElement;
const yourPassword = document.getElementById(`yourPassword`);

let upper = false;
let lower = false;
let numbers = false;
let symbols = false;
let lengthpass = parseInt(lengthp.value);

if (uppercaseON.checked) {
  upper = true;
}
if (lowercaseON.checked) {
  lower = true;
}
if (numbersON.checked) {
  numbers = true;
}
if (symbolsON.checked) {
  symbols = true;
}

function generatePassword(
  lengthpass: number,
  upper: boolean,
  lower: boolean,
  numbers: boolean,
  symbols: boolean
) {
  const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
  const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numChars = "1234567890";
  const symChars = "'/];.[}>:{";

  let allowedChars = "";
  let password = "";

  allowedChars += lower ? lowerChars : "";
  allowedChars += upper ? upperChars : "";
  allowedChars += numbers ? numChars : "";
  allowedChars += symbols ? symChars : "";

  if (yourPassword) {
    yourPassword.textContent = allowedChars;
  }
}

// if (yourPassword) {
//   const endPassword = generatePassword(
//     lengthpass,
//     upper,
//     lower,
//     numbers,
//     symbols
//   );
//   yourPassword.textContent = endPassword;
// }
