// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
var parola = prompt("inserisci una parola");

var parolaInvertita = "";

parolaInvertita = inverti(parola)




if (parola == parolaInvertita) {
  console.log("La parola é palindroma");
}else{
  console.log("La parola non é palindroma");
}


function inverti(parola){
  var parolaInvertita = "";
  for (var i = parola.length-1; i >= 0; i--) {
  parolaInvertita += parola[i];
  }
  return parolaInvertita;
}
