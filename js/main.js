import harry from './les_6.js';

/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */
// <<<<<<< HEAD
// console.log(555);
// =======


// >>>>>>> BerendWeij/master
/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
<<<<<<< HEAD
 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
=======
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
>>>>>>> BerendWeij/master
 */
    var teacherName = "Berend";
    var mentor = "Rosmerta";
    var rdteacher = "ed";
    var bacteacher = "hugo";
    var javateacher = "joey";

    var housenumber = 43;
    var mobile = +3164413658;
    var age = 17;
    var dogsageMonths = "4";
    var sisterage = "19";

    var hungry = true;
    var tired = true;
    var wantToGoHome = true;
    var wantFood = true;
    var wantPizza = true;

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

  var cars = ['Volvo', 'Renault', 'Ferrari'];
console.log(cars.length);

    var animal = ['Cat', 'Dog', 'Elephant', 'Tiger', 'Mouse', 'Bird'];
    console.log(animal.length);

    var ducks  = ['kwik', 'kwek', 'kwak'];
    console.log(ducks.length);

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

 let A = [];
 A.push("kaas");
 console.log(A);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
 let B = ["harry","henk","Herman"];
 B.splice(0,1);
 B.splice(1,1);
 console.log(B);
/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */
 let mobilephone = {type:"OnePlus", model:"3T", color:"Black"};
 let laptop = {type:"MSI", model:"GT722QE", color:"Black"};
 let mouse = {type:"Razer", model:"NageHexV2", color:"Black"};
 let consoles = {type:"Xbox", model:"One", color:"Black"};
 let Headset = {type:"Astro", model:"A40tr", color:"White"};
 let carFather = {type:"Kia", model:"ceed", color:"brown"};
 let carMother = {type:"Renault", model:"megane", color:"gray"};
 let Father = {FirstName:"Sergio", LastName:"Bertozzi", age:"52"};
 let Mother = {name:"Irene", LastName:"Bertozzi", age:"50"};
 let sister = {name:"Denise", LastName:"Bertozzi", age:"19"};


/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

 function plus(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}

function keer(a, b) {
    return a * b;
}

function delen(a, b) {
    return a / b;
}

console.log(plus(5,5));
console.log(min(5,5));
console.log(keer(5,5));
console.log(delen(5,5));


/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */
 function person(firstName, lastName){
 	var newPerson = {firstName:firstName, lastName:lastName};

 	console.log(newPerson);
 	return newPerson;
 }

 person("mauro","bertozzi")

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log(
    'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : false, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruikenz
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */
var array = ["harry","kees","pietje"];
var random = array.random();
console.log(random);
/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */
var randomString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
var newSting = randomString.replaceAll('i', 'kys');
console.log(newSting);
/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?', 'elke functie heeft zijn eigen koppel functies');


/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */

 Array.prototype.empty = function() {
    console.log(this.length);
    this.splice(0,this.length);
    return this;
};

var bla = ["hatty","harry","maggi"];
var emptyBla = bla.empty();
console.log(emptyBla);

var blas = ["hatty","harry"];
var emptyBlas = blas.empty();
console.log(emptyBlas);

var blaa = ["hatty","harry","maggi","kwik"];
var emptyBlaa = blaa.empty();
console.log(emptyBlaa);

/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */

//   Array.prototype.every = function() {
//     alert(this);
//     return this;
// };
//  var fruit = ["banaan", "aardbei"];
//  // var alertFruit = fruit.every();



//   Array.prototype.pop = function() {
//     // alert("kipsateé");
//     return this;
// };

// var cop = ["pizza","kaas","pasta"];
// var popcop = cop.pop();

