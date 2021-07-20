//CONSEGNA:
//1. chiedi all’utente il cognome
var cognome = prompt('Inserisci il tuo cognome');

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lista_cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli, ' + cognome];

//Stampo lista Disordinata
console.log(lista_cognomi);

document.getElementById("cognomi_disordinati").innerHTML = lista_cognomi;

//3. stampa la lista ordinata alfabeticamente
//Stampo lista Ordinata
console.log(lista_cognomi.sort());

document.getElementById("cognomi_ordinati").innerHTML = lista_cognomi.sort();

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova