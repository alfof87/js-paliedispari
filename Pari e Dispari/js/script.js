//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// (usando una funzione)
// Dichiariamo chi ha vinto.

var numeroUtente = prompt("inserisci un numero da 1 a 5");
console.log("Il numero Utente é: " + numeroUtente);


var numeroComputer = Math.floor(Math.random()*5 + 1);
console.log("Il numero Computer é: " + numeroComputer);

var numSomma = (numeroUtente + numeroComputer);

if(numSomma%2 == 0){
  console.log("Vince il pari");
}else{
  console.log("Vince il dispari");
}
