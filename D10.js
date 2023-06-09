/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("Esercizio B", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Alessandro",
  surname: "Giorgino",
  age: "27",
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "Javascript"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Speriamo Java");

console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  numeroRandom = Math.floor(Math.random() * 6 + 1);
  return numeroRandom;
};
console.log("dice", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else if (num2 > num1) {
    console.log(num2);
    return num2;
  } else {
    console.log("i due numeri sono uguali! inserisci due numeri diversi");
  }
};
whoIsBigger(
  Math.floor(Math.random() * 1000 + 1),
  Math.floor(Math.random() * 1000 + 1)
); //dopo se avanza tepo faccio un Mathfloor e random per avere due numero casuale

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (stringa) {
  let split = stringa.split(" ");
  return split;
};
console.log(splitMe("Eddaje co sto 68%"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (stringa, boolean) {
  if (boolean === true) {
    console.log(stringa.slice(1, stringa.length));
  } else if (boolean === false) {
    stringa.slice(0, -1); ////nonostante credo sia corretto non tagli l'ultima lettera
    console.log(stringa);
  }
};

deleteOne("daje", false);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"

  
*/
const onlyLetters = function (siena) {
  const sienaFallito = siena.replace(/[0-9]/g, ""); //soluzione trova su stackoverflow fonte https://stackoverflow.com/questions/71705688/how-to-remove-numbers-from-strings
  return sienaFallito;
};

console.log(onlyLetters("Il Siena sta fallendo per la 4 volta in 6 anni"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const emailValida = function (mail) {
  if (
    mail.includes("@gmail.com") ||
    mail.includes("@hotmail.it") ||
    mail.includes("@outlook.it") ||
    mail.includes("@live.it")
  ) {
    console.log("email valida!");
  } else if (mail.includes("@yahoo.it") || mail.includes("libero.it")) {
    console.log("La tua mail è vetusta, io ne farei una più moderna");
  } else if (
    !(
      mail.includes("@gmail.com") ||
      mail.includes("@hotmail.it") ||
      mail.includes("@outlook.it") ||
      mail.includes("@live.it")
    )
  ) {
    console.log("Indirizzo email non valido");
  } else if (mail.includes("@yahoo.it") || mail.includes("libero.it")) {
    console.log("La tua mail è vetusta, io ne farei una più moderna");
  }
};
emailValida("asdrubale77@gmail.com");

//la funzione è limitata perché avendo poche un database estremamente limitato non controlla tutte le mail. StackOverFlow suggerisce di usare regex, ho voluto lasciare il mio ragionamento

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const adesso = new Date();
  let oggi = adesso.getDay();
  console.log(oggi);
};
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const oggetto = { sum: 0, values: [] };

const rollTheDices = function (numeroEstratto) {
  for (let i = 0; i < numeroEstratto; i++) {
    let inizio = dice();
    oggetto.sum = oggetto.sum + inizio;
    oggetto.values.push(inizio);
  }
  return oggetto;
};
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  const dataInMs = Date.parse(date);

  const oggiInMs = Date.now();
  const differenzaMs = dataInMs - oggiInMs;

  const giorniTrascorsi = Math.floor(differenzaMs / (1000 * 60 * 60 * 24));
  console.log(giorniTrascorsi);
  return giorniTrascorsi;
}

const giornoScelto = new Date(2004, 3, 6); //giorno ultima puntata della Melevisione con Tonio Cartonio
const giorniPassati = howManyDays(giornoScelto);
console.log("Giorni trascorsi:", giorniPassati);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
  const adesso = new Date();
  const adessoStringa = adesso.toDateString();
  adessoStringa.toString();
  adessoStringa.slice(0, 3); // vorrei cancellare i primi 3 caratteri della stringa ma non lo cancella
  console.log(adessoStringa); // adesso ho una stringa  Fri Jun 09 2023
  let mioCompleanno = "Wed Dec 27 1995";
  if (adessoStringa === mioCompleanno) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isTodayMyBirthday();

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (oggetto, stringa) => {
  delete oggetto[stringa];
  return oggetto;
};

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let old = movies[0];
  movies.forEach((film) => {
    if (parseInt(film.Year) > parseInt(old.Year)) {
      nuovo = film;
    }
  });
  return nuovo;
};
console.log("Esercizio 12 ", newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function () {
  let numeroFilm = movies.filter((movie) => {
    if (movie.Type === "movie") {
      return true;
    } else {
      return false;
    }
  });
  return numeroFilm.length;
};
console.log("Esercizio 13 ", countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function () {
  let anniFilm = movies.map((anno) => {
    return anno.Year;
  });
  return anniFilm;
};
console.log("Esercizio 14, ", onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (movies) {
  let oldMovies = movies.filter((film) => {
    parseInt(movies.Year);
    if (film.Year < 2000) {
      return true;
    } else {
      return false;
    }
  });
  return oldMovies;
};

console.log("Esercizio 15 ", onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (movies) => {
  return movies.reduce((acc, corrente) => acc + parseInt(corrente.Year), 0);
};

console.log("Esercizio 16, ", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (stringa) {
  //   return movies.filter((film) => film.includes(stringa));
  // };
  movies.forEach((titolo) => {
    if (titolo.Title.includes(stringa)) {
      return movies.Title;
    }
    console.log(movies.Title); //riesco ad avere i film giusti però come undefined !!!!!!!
  });
};
searchByTitle("The");

//primo tentativo, riuscivo ad avere il numero corretto dei film, ma in consollog metteva undefined. Riprovo in seguito se mi avanza tempo

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (string, array = movies) => {
  arrFilm = [];
  arrFilm.push(array.filter((movie) => movies, Title.includes(string)));
  arrFilm.push(array.filter((movie) => !movies, Title.includes(string)));
  return arrFilm;
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selezioneContainer = function () {
  let x = document.getElementById("container");
};
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
consta */
const tuttiTd = function () {
  let allTds = document.getElementsByTagName("td");
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const svuotaTd = function () {
  allTds.forEach((td) => {
    console.log(td.innerText);
  });
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const ancoraRosse = function () {
  const tutteLeAncore = document.querySelectorAll("a");

  tutteLeAncore.style.backgroundColor = "red";
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const aggiungiLista = function () {
  const locationLista = document.getElementById("myList");
  let nuovoElemento = document.createElement("li");
  locationLista.appendChild(nuovoElemento);
};
// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */
const rimuoviFiglio = function () {
  locationLista.removeChild(nuovoElemento);
};
//così rimuovo solo il child che ho inserito io, se avessi voluto rimuoverli tutti avrei dovuto usare un forEach

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const TrsClassAdd = function () {
  let allTheTrs = document.getElementsByTagName("tr");
  let arr = Array.fromallTheTrs;
  arr.forEach((tr) => {
    tr.classList.add("test");
  });
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function (numero) {
  if (numero === 1) {
    return false;
  } else if (numero === 2) {
    return true;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(isItPrime(999));
