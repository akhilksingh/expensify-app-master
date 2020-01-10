// console.log("destructuring");

// const person = {
//     name : 'Akhil',
//     age : 26,
//     location : {
//         city : 'Aligarh',
//         temp : 40 
//     }
// }
// const {name : firstName = 'Unanonymous', age}= person;
// const {city, temp} = person.location;
// console.log(`${firstName} and age is ${age}`);
// console.log(`${firstName} lives in ${city} and temp of ${city} is ${temp} and age is ${age}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin is Duck'
//     }
// }

// const { name : publisherName } = book.publisher;

// console.log(publisherName);

const address = ['1299 S Gyan Sarovar','Phile','India','19147'];
//can set up the defaults 
const [, ,country = 'Argentina'] = address;

console.log(`You are in ${country}`);

const item =['Coffee(hot)','$2','$3','$4'];
const [,small,med,large] = item;
console.log(`the cost of medium cofee is ${med}`); 