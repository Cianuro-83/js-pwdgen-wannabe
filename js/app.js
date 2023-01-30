console.log(
  "prendo elemento html con id first-name e lo assegno alla sua variabile"
);
let name = document.getElementById("first-name");
console.log("Chiedo il Nome all'utente");
firstName = prompt("Inserisci il tuo nome");
console.log("imposto innerHTML di name");
name.innerHTML = firstName;

console.log(
  "prendo elemento html con id first-name e lo assegno alla sua variabile"
);
let lastName = document.getElementById("last-name");
console.log("Chiedo il Cognome all'utente");
surname = prompt("Inserisci il tuo Cognome");
console.log("imposto innerHTML di Last Name");
lastName.innerHTML = surname;
