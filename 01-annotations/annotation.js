// Type annotations
var firstName = 'John';
var secondName = 'Doe';
var age = 30;
var isMarried = false;
var hobbies = ['Sports', 'Cooking'];
var role = [1, 'Admin'];
// Object Type
var person;
person = {
    name: 'Praveen Kumar',
    age: 30
};
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
var greeting;
// greeting = (name: string) => {
//     return 'Hello, ' + name + '!';
// }
greeting = function (name) {
    console.log('Hello, ' + name + '!'); // undefined
    return 'Hello, ' + name + '!';
};
console.log(greeting('Praveen Kumar'));
