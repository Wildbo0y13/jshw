// Напишите программу которая сложит все числа в заданном массиве
// выведет результат в консоль
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];

let sum = 0;

for (let i = 0 ; i < nums1.length ; i++){

sum += nums1[i]

}

console.log(sum)

// Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

let name2 = JSON.parse(JSON.stringify(names));


for (let i = 0; i < name2.length ; i++){
  let name = names[i];
  let LengthOfTheName = name.length;
  let fname = name.charAt(0).toUpperCase() + name.slice(1);

  namesObject.push({name: fname ,nameLength: LengthOfTheName });
}
console.log(namesObject);

// Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

for (let num = 0; num < nums2.length; num++) {
    let x = nums2[num];
    let summ = x * x;
    let cybe = x * x * x ;
    numsRes.push({number: x, square: summ, cube: cybe} );
}
console.log(numsRes);

// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];
numberRow.forEach(function(i) {
    reversedNumberRow.unshift(i)
});
console.log(reversedNumberRow);

// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
];

cars.forEach(function(car) {
    console.log(`This is ${car.color} ${car.make}. It costs ${car.price}€.`);
  });