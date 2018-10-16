// CONST & LET

// let name = "mansoor";
// let test;

// name = "amin";

// const person = {
//   name: "mansoor",
//   age: 25
// };

// person.name += " amin";

// const nums = [1, 2, 3, 4];

// nums.push(5);

// ARROW FUNCTIONS

// function sayHello() {
//   console.log("Hello");
// }

// const sayHello = name => console.log(`hello ${name}`);
// sayHello("mansoor");

// FOREACH

// const fruits = ["Apples", "Oranges", "Grapes"];
// fruits.forEach((fruit, index) => console.log(fruit));

// MAP

// const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
// console.log(singleFruit);

// FILTER

// const people = [
//   { id: 1, name: "Mansoor" },
//   { id: 2, name: "Amin" },
//   { id: 3, name: "Ali" }
// ];

// const people2 = people.filter(people => people.id !== 2);
// console.log(people2);

// SPREAD

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];
// const arr3 = [...arr.filter(num => num !== 2)];

// console.log(arr3);

// const person1 = {
//   name: "Amin",
//   age: 25
// };

// const person2 = {
//   ...person,
//   email: "asdf@zxc.com"
// };
// console.log(person2);

// DESTRUCTURING

// const profile = {
//   name: "Mansoor",
//   address: {
//     street: "6 sec 4",
//     city: "Karachi"
//   },
//   hobbies: ["movies", "music", "programing"]
// };
// const { name, address, hobbies } = profile;
// const { street, city } = profile.address;

// console.log(street, city);

// console.log(name, address.street, hobbies[0]);

// CLASSES

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person("Mansoor", 20);
const person2 = new Person("Amin", 30);

// console.log(person1.greet());
// console.log(person2.greet());
// console.log(`Name : ${person2.greet}, Age: ${person2.age}`);

// SUBCLASSES

// class Customer extends Person {
//   constructor(name, age, balance) {
//     super(name, age);
//     this.balance = balance;
//   }
//   info() {
//     return `${this.name} owes $${this.balance}.00`;
//   }
// }
// const customer1 = new Customer("Mansoor", 25, 500);
// console.log(customer1.info());

// MODULES

//  file 1 (file1.js)
export const name = "amin";
export const nums = [1, 2, 3];
export default Person;

//  file 2 (file2.js)
import { name, nums } from "./file1";
import Person from "./file1";
