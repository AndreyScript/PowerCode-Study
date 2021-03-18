/*1.*/

let obj = {
    bread: 25,
    milk: 30,
    chips: 50,
    water: 10,
    cucumbers: 42
}

let sum = 0;
for (let products in obj) {
    sum += +obj[products];
}
console.log('Общая стоимость покупок ' + sum);

let arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
let min = Math.min.apply( null, arr );
console.log('Cамый дешевый товар ' + min);
let max = Math.max.apply( null, arr );
console.log('Cамый дорогой товар ' + max);

/*2.*/

let films =[ {
    title: 'Joker',
    rating: 8.1,
    premier: true
} ,
{
    title: 'Iron Man',
    rating: 7,
    premier: true
} ,
{
    title: 'Thor',
    rating: 7.5,
    premier: false
},
{
    title: 'Black Panther',
    rating: 8.2,
    premier: true
} ,
{
    title: 'Hulk',
    rating: 8.5,
    premier: false
} ]

let ratingSum = 0;
let itemsFound = 0;
let item = null;
for (let i = 0; i < films.length; i++) {
    item = films[i];
    if (item.premier || !item.premier) {
        ratingSum = item.rating + ratingSum;
        itemsFound = itemsFound + 1;
    } if (item.premier) {
        console.log (films[i]);
    } if (item.rating > 8.0) {
        console.log (item.title + ' -', item.rating);
    }
}
    let averagerating = ratingSum / itemsFound;
    console.log("Средняя оценка: " + averagerating);

