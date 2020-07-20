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
var range;

// Si seleziona la difficoltà del gioco
var difficolta = parseInt(prompt('Scegli il grado di difficoltà del gioco da 0 a 2'));

switch (difficolta){
    case 0:
    range = 100;
    case 1:
    range = 80;
    case 2:
    range = 50;
}

//si riempie un array di numeri random ognuno diverso dall'altro.
while (listaNumeriRandom.length < 16) {
    do {
        numeroRandom = (randomNumber(1,range));
        controllo = checkElement(listaNumeriRandom, numeroRandom);
    } while(controllo == true)
    listaNumeriRandom.push(numeroRandom);
}

//ordina gli elementi dell'array random.
listaNumeriRandom.sort();
console.log(listaNumeriRandom);

//Logica gioco
do {
    //Chiede un numero fino alla sconfitta oppure al raggiungimento del valore max
    //settato dalla difficoltà del gioco
    if (listaNumeriScelti.length < (range - 16)){
        numeroScelto = parseInt(prompt('Scegli un numero!'));
        controllo = checkElement(listaNumeriRandom, numeroScelto);
        if(controllo==true){
            alert('Hai beccato una mina! Hai perso!');
        } else {
            // controllo se numero inserito è gia' inserito
            controllo = checkElement(listaNumeriScelti, numeroScelto);
            if(controllo==true){
                alert('Numero già scelto, riprova!');
                controllo = false;
            } else {
                //inserisce valore nella lista dei numeri scelti (punti)
                listaNumeriScelti.push(numeroScelto);
            }
        }
    } else {
        //Caso: array numeri scelti riempito tutto (trovate tutte le mine). Vittoria
        alert('Complimenti, hai vinto!!!');
        controllo=true;
    }
} while (controllo==false);

//Stampa a video

document.getElementById('campo-minato').innerHTML = 'Hai totalizzato: ' + listaNumeriScelti.length + ' punti!';
document.getElementById('lista-numeri-random').innerHTML = "Ecco le mine presenti: " + listaNumeriRandom;
document.getElementById('lista-numeri-scelti').innerHTML = "Ecco i tuoi punti: " + listaNumeriScelti;




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
