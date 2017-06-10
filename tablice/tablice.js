'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);

imiona[3] = 'Tania';
imiona[2] = 'Ela';

console.log(imiona);

//push dodaje na samym koncu element

imiona.push('Geralt');

console.log(imiona);

imiona.pop(); //usuwa ostatni element

console.log(imiona);

console.log(imiona.unshift('Robert')); //unshift dodaje na poczatek roberta

console.log(imiona);

console.log(imiona.shift()); //wyswietla pierwszy element i jednoczesnie usuwa
console.log(imiona);

console.log(imiona);
console.log(imiona.length);

//petla przeleci po wszystkich elementach tablicy

for (var i = 0; i < imiona.length ; i++) {
    console.log( imiona[i]);
}


imiona.forEach(function (element, i) {
    console.log('Element nr ' + i + '=' + element);    
});

console.log(imiona.join("-")); //łączy po kolei każdy element kreską

imiona.sort();

console.log(imiona);

imiona.reverse();

console.log(imiona);

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);


console.log(zbiorImion.indexOf("Mariusz")); //pokaze na ktorym miejscu jest Mariusz

console.log( Array.isArray(zbiorImion)); //sprawdzamy czy jest tablicą

console.log( zbiorImion.slice(2, 5));

zbiorImion.splice(2, 3, "Julek", "Krzyś"); //od drugiego wycina 3 i wkleja swoje dwa julek i krzys

console.log(zbiorImion);

console.log(zbiorImion.toString());