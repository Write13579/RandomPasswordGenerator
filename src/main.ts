function generatePassword() {
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
  const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
  const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numChars = "1234567890";
  const symChars = "'/];.[}>:{!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += lower ? lowerChars : "";
  allowedChars += upper ? upperChars : "";
  allowedChars += numbers ? numChars : "";
  allowedChars += symbols ? symChars : "";

  for (let i = 0; i < lengthpass; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex); //lub password = allowedChars[randomIndex]  <== tak bylo w poradniku xd;
  }

  if (yourPassword) {
    if (allowedChars === ``) {
      yourPassword.textContent = `choose one of the options`;
    } else if (lengthpass <= 0) {
      yourPassword.textContent = `you need to enter at least one character`;
    } else {
      yourPassword.textContent = password;
    }
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
