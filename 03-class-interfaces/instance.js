"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing the class
var class_interface_1 = require("./class-interface");
// Instantiation
var praveen = new class_interface_1.PersonDetails('CSE'); // object1
praveen.name = 'Praveen';
praveen.address = 'Sathyabama University';
praveen.age = 30;
praveen._length = 20;
// praveen.livingAt = 'Madurai, India';
console.log(praveen.greet()); // JSON approach
// Invoke Interface
var userPraveen = {
    name: "John",
    age: 30,
    greet: function (phrase) {
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
