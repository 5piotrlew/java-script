'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 200;

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga jest równa z Mateuszem");
} else {
    console.log("Olga jest wyższa");
}

//warunek switch

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
    console.log('Kolor czerwony');
    break;
    case 'zielony':
    console.log('Kolor zielony');
    break;
    case 'niebieski':
    console.log('Kolor niebieski');
    break;
    default:
    console.log('Inny kolor');
}