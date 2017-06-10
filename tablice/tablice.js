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

