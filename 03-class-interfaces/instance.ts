// importing the class
import { PersonDetails } from "./class-interface";
import { UserInterface } from "../02-objects-functions/array-objects";

// Instantiation
let praveen = new PersonDetails('CSE'); // object1

praveen.name = 'Praveen';

praveen.address = 'Sathyabama University';
praveen.age = 30;
praveen._length = 20;
// praveen.livingAt = 'Madurai, India';
console.log(praveen.greet()); // JSON approach


// Invoke Interface
const userPraveen: UserInterface = {
    name: "John",
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

userPraveen.greet("Hello!, I am");

/* Response
    PersonDetails {
    name: 'Praveen',
    age: 30,
    address: 'Sathyabama University'
    }
*/

/*
This invokes the constructor first
Your Details: Praveen 30 Sathyabama University CSE, India
Hello,  Praveen! Thanks for joining CSE. Have a nice day!
*/