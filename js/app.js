console.log("prendo elemento html con id first-name");
let name = document.getElementById("first-name");
console.log("imposto innerHTML di name");
name.innerHTML = name;
console.log("Chiedo il nome all'utente");
name = prompt("Inserisci il tuo nome");
