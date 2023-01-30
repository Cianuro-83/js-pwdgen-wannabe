console.log(
  "prendo elemento html con id first-name e lo assegno alla sua variabile"
);
let name = document.getElementById("first-name");
console.log("Chiedo il nome all'utente");
firstName = prompt("Inserisci il tuo nome");
console.log("imposto innerHTML di name");
name.innerHTML = firstName;
