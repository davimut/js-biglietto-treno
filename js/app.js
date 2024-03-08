//Descrizione:
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi sul prezzo (per questo sarà necessario cercare in documentazione come fare)
// BONUS
// provate a stampare il prezzo anche nella pagina html dentro ad un tag p
// Consigli:
// partite sempre analizzando il problema e scrivendo i commenti dei vari procedimenti che dovete svolgere
// ragionate sempre sul tipo di dato che vi arriva dall’utente: è una stringa o un numero?
// Stampare il risultato con due cifre decimali non vuol dire che dovete arrotondarlo quando fate i calcoli, ma solo quando lo stampate vanno lasciati i due decimali… ragionateci



//DOMANDARE quanti km da percorrere

//DOMANDARE eta

//prezzo biglietto 0.21€ al km

//calcolare la tariffa moltiplicata per il costo al km

//creare sconti sottraendo la percentuale al prezzo calcolato per km scelti

//SE il cliente è <18, verrà applicato uno sconto del 20% sulla tariffa dei km scelti

//ALTRIMENTI SE il cliente sara >65 ,verra applicato uno sconto del 40%

//ALTRIMENTI tariffa normale


//DOMANDARE al cliente eta
const eta = parseInt( prompt('inserisci la tua eta !'))
console.log('eta che hai scelto',eta) //numero | null

//DOMANDARE al cliente quanti km vuole percorrere
const km = parseInt( prompt('inserisci quanti chilometri vuoi percorrere !'))
console.log('i chilometri che hai scelto', km) //numero| null

//prezzo biglietto 0.21€ al km
const prezzoBase = 0.21

//calcolo tariffa km
let prezzoKm = (prezzoBase*100 * km)/100  //numeri (solo 2 decimali)

//sconto del prezzo dei km del
const sconto20 = prezzoKm * 0.2 //numeri

const sconto40 = prezzoKm * 0.4 //numeri

let prezzoFinale  = document.getElementById("risultato");

if( eta < 18) {//SE il cliente è <18, verrà applicato uno sconto del 20% sulla tariffa dei km scelti
prezzoFinale.innerText = ('abbiamo applicato uno sconto del 20% sul tuo bilglietto! essendo minorenne il prezzo del tuo biglietto sara  '+ (prezzoKm - sconto20).toFixed(2)+'€') //string 
}else if( eta >= 65){//ALTRIMENTI SE il cliente sara >65 ,verra applicato uno sconto del 40%
 prezzoFinale.innerText = ('abbiamo applicato uno sconto del 40% sul tuo bilglietto! essendo over 65 il prezzo del tuo biglietto sara  '+ (prezzoKm - sconto40).toFixed(2)+'€') //string 
}else {//ALTRIMENTI tariffa normale
 prezzoFinale.innerText = ( 'non abbiamo applicato nessuno sconto! purtroppo non essendo minorenne o over 65 il tuo prezzo è   '+prezzoKm +'€')  //string 
} 
 

