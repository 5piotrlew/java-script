'use strict';

var krzysiek = 3500;
var jurek = 5000;
var jola = 7500;
var sergio = 2500;

var sumaKasy;

function policzSumeKasy(skladowa1, skladowa2, skladowa3, skladowa4)
{
    var sumaKasy;
    sumaKasy = skladowa1 + skladowa2 + skladowa3 + skladowa4;    
    return sumaKasy;    
}

sumaKasy = policzSumeKasy( krzysiek, jurek, jola, sergio);
console.log(sumaKasy);