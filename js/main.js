//CONSEGNA:
//1. chiedi all’utente il cognome---------------------------------------------------------------------------------------------------------------------------------
var cognome = prompt('Inserisci il tuo cognome');

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’--------------------------------------------------------------------
var lista_cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
lista_cognomi.push(cognome)//Inserisco il cognome dell'utente sull'Array

//Stampo lista Disordinata
console.log(lista_cognomi);

document.getElementById("cognomi_disordinati").innerHTML = lista_cognomi;

//3. stampa la lista ordinata alfabeticamente------------------------------------------------------------------------------------------------------------------------
//Stampo lista Ordinata
console.log(lista_cognomi.sort());

document.getElementById("cognomi_ordinati").innerHTML = lista_cognomi.sort();

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova--------------------------------------------------------------------
//INDEXOF
//Posizione umana partendo da 0
console.log(lista_cognomi.indexOf('Bianchi') + 'Bianchi');
console.log(lista_cognomi.indexOf('Neri') + 'Neri');
console.log(lista_cognomi.indexOf('Rossi') + 'Rossi');
console.log(lista_cognomi.indexOf('Verdi') + 'Verdi');
console.log(lista_cognomi.indexOf('Gialli') + 'Gialli');
console.log(lista_cognomi.indexOf(cognome) + cognome);

//Posizione umana partendo da 1
console.log((lista_cognomi.indexOf('Bianchi') + 1) + 'Bianchi');
console.log((lista_cognomi.indexOf('Neri') + 1) + 'Neri');
console.log((lista_cognomi.indexOf('Rossi') + 1) + 'Rossi');
console.log((lista_cognomi.indexOf('Verdi') + 1) + 'Verdi');
console.log((lista_cognomi.indexOf('Gialli') + 1) + 'Gialli');
console.log((lista_cognomi.indexOf(cognome) + 1) + cognome);

//SLICE
//Scrive gli elementi selezionati in una matrice, come una nuova matrice.
var posizioneUmana = lista_cognomi.slice(0, 6);

document.getElementById("posizione_umana").innerHTML = posizioneUmana;