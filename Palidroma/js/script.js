// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
var parola = prompt("inserisci una parola");

function palindroma(parola){
  var risultato = parola.reverse();
  if(risultato == parola){
    console.log("La parola é palindroma");
  }else{
    console.log("la parola non é palindroma");
  }

  return risultato;

}
