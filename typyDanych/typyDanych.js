'use strict';

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


//Typ - lanuch znakow - string 

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + "\n" + premiaStr;
console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + " \"dodajemy\" " + premiaStr;
console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + ' "dodajemy" ' + premiaStr;
console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + ' \\ "dodajemy" ' + premiaStr;
console.log(calkowitaWyplataStr);

var imieStudenta = " Michał ";
console.log(imieStudenta.indexOf('c')); //pokazuje ktore jest Ce liczac od zera a nie jedynki 
console.log(imieStudenta);
console.log(imieStudenta.trim()); //usuwa spacje z poczatku i konca
imieStudenta = imieStudenta.trim(); //przypisuje zmiane

//typ logiczny

var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa");
}






