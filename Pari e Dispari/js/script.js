//calcola la somma e la media dei primi 10 numeri (10 prompt)

var num1 = prompt("Inserisci primo numero");
var num2 = prompt("Inserisci secondo numero");
var num3 = prompt("Inserisci terzo numero");
var num4 = prompt("Inserisci quarto numero");
var num5 = prompt("Inserisci quinto numero");
var num6 = prompt("Inserisci sesto numero");
var num7 = prompt("Inserisci settimo numero");
var num8 = prompt("Inserisci ottavo numero");
var num9 = prompt("Inserisci nono numero");
var num10 = prompt("Inserisci decimo numero");

//var sum = parseInt((num1+num2+num3+num4+num5+num6+num7+num8+num9+num10))
var sum = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5)+parseInt(num6)+parseInt(num7)+parseInt(num8)+parseInt(num9)+parseInt(num10);
console.log(sum);
var media = sum/10;
console.log(media);
