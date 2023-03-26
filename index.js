const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

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
   toggle numbers or symbol

*/

let password1El = document.getElementsByClassName("password1")[0];
let password2El = document.getElementsByClassName("password2")[0];

//void
function setPassword(){
   password1El.textContent = getPassword();
   password2El.textContent = getPassword();
}

// return 15letter[str]
function getPassword() {
   let tempPassword = [];
   for (let i = 0; i < 15; i++){
      tempPassword.push(getRandomChar())
   }
   return tempPassword.join("");
}

// return char[str]
function getRandomChar() {
   let randomIndex = Math.floor(Math.random() * characters.length);
   return characters[randomIndex];
}

function resetPassword() {
   password1El.textContent = ""
   password2El.textContent = ""
}
