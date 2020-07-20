// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var listaNumeriRandom = [];
var listaNumeriScelti = [];
var numeroRandom;
var numeroScelto;
var controllo;

//riempio un array di numeri random ognuno diverso dall'altro.
while (listaNumeriRandom.length < 16) {
    do {
        numeroRandom = randomNumber(1,100);
        controllo = checkElement(listaNumeriRandom, numeroRandom);
    } while(controllo == true)

    listaNumeriRandom.push(numeroRandom);
}
console.log(listaNumeriRandom);


do {
    if (listaNumeriScelti.length < 5){
        numeroScelto = parseInt(prompt('Scegli un numero!'));
        controllo = checkElement(listaNumeriRandom, numeroScelto);
        if(controllo==true){
            alert('Hai perso!');
        } else {
            listaNumeriScelti.push(numeroScelto);
        }
    } else {
        alert('Complimenti hai vinto!!!');
        controllo=true;
    }
} while (controllo==false);

console.log('Hai totalizzato: ' + listaNumeriScelti.length + " punti!");




// ** FUNZIONI ** //
// Genera e restituisce un numero random in un intervallo
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//dato un elemento e un array, controlla che l'elemento sia presente nell'array
//restituisce true se l'elemento è presente nell'array.
function checkElement (array, element){
    var check = false;
    for(var i = 0; i < array.length; i ++){
        if (element == array[i]){
            check = true;
        }
    }
    return check;
}
