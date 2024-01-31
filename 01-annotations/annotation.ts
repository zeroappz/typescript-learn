// Type annotations

let firstName: string = 'John';
let secondName: string = 'Doe';
let age: number = 30;
let isMarried: boolean = false;
let hobbies: string[] = ['Sports', 'Cooking'];
let role: [number, string] = [1, 'Admin'];

// Object Type
let person: {
    name: string;
    age: number;
}

person = {
    name: 'Praveen Kumar',
    age: 30
}
// firstName = 'John';
// secondName = 'Doe';
// age = 30;
// isMarried = false;
// hobbies = ['Sports', 'Cooking'];
// role = [1, 'Admin'];

// Object Person
console.log(firstName, secondName, age, isMarried, hobbies, role);
console.log(hobbies[1]);
console.log(hobbies[0]);
console.log(role[1]);
console.log(person); // Prints the complete object
console.log(person['name']);
console.log(person['age']);

// Function Object Type or Arguments
let greeting: (name: string) => string;

// greeting = (name: string) => {
//     return 'Hello, ' + name + '!';
// }

greeting = function (name: string) {
    console.log('Hello, ' + name + '!'); // undefined
    return 'Hello, ' + name + '!';
}

console.log(greeting('Praveen Kumar'));