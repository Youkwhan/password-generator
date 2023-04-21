const allCharacters = [
	"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"abcdefghijklmnopqrstuvwxyz",
	"0123456789",
	"!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/",
];
/*
two 15 characters long password
Interactions:
   - Generate password button
   - Reset button
   - password1 p
   - password2 p 


Extra:
   set password length
   copy on click
   toggle upper, lower, numbers or symbol - 4

*/
const passwordLengthInput = document.getElementById("password-length");
const password1El = document.getElementsByClassName("password1")[0];
const password2El = document.getElementsByClassName("password2")[0];

const uppercaseEl = document.getElementById("uppercase-toggle");
const lowercaseEl = document.getElementById("lowercase-toggle");
const numbersEl = document.getElementById("numbers-toggle");
const symbolsEl = document.getElementById("symbols-toggle");

//void
function setPassword() {
	let passwordLength = parseInt(passwordLengthInput.value);
	let errorDiv = document.getElementById("error");

	if (validateInput(passwordLength)) {
		password1El.textContent = getPassword(passwordLength);
		password2El.textContent = getPassword(passwordLength);
	} else {
		// error message
		//  console.log("not valid length")
		errorDiv.textContent = "Must be a number between 1 and 15";
		setTimeout(() => {
			errorDiv.textContent = "";
		}, 2000);
	}
}

// return 15letter[str]
function getPassword(passwordLength) {
	let selectedCharacters = toggledCharacters();
	// console.log(selectedCharacters)
	let tempPassword = "";
	for (let i = 0; i < passwordLength; i++) {
		tempPassword += getRandomChar(selectedCharacters);
	}
	return tempPassword;
}

// return char[str]
function getRandomChar(selectedCharacters) {
	let randomIndex = Math.floor(Math.random() * selectedCharacters.length);
	return selectedCharacters[randomIndex];
}

// return str, create a new search space
function toggledCharacters() {
	let tempCharacters = [];
	if (uppercaseEl.checked) {
		tempCharacters.push(allCharacters[0]);
	}
	if (lowercaseEl.checked) {
		tempCharacters.push(allCharacters[1]);
	}
	if (numbersEl.checked) {
		tempCharacters.push(allCharacters[2]);
	}
	if (symbolsEl.checked) {
		tempCharacters.push(allCharacters[3]);
	}
	if (tempCharacters.length === 0) {
		tempCharacters = allCharacters;
	}

	return tempCharacters.join("");
}

// void
function resetPassword() {
	password1El.textContent = "";
	password2El.textContent = "";

	// this updates html text, then actual input value attribute
	passwordLengthInput.textContent = "15";
	passwordLengthInput.value = "15";

	const checkboxes = document.querySelectorAll("input.toggle-input");
	for (let i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}
}

// return bool, is input length in our range
function validateInput(passwordLength) {
	if (isNaN(passwordLength) || passwordLength < 1 || passwordLength > 15) {
		return false;
	}
	return true;
}
