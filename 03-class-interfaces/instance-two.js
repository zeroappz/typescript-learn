"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing the class
var class_interface_1 = require("./class-interface");
var surya = new class_interface_1.PersonDetails('Information Technology'); // object2
surya.name = 'Surya';
surya.age = 30;
surya.address = 'Sathyabama University';
console.log(surya.greet());
/*
    PersonDetails {
        name: 'Surya',
        age: 30,
        address: 'Sathyabama University'
    }
*/
// Hello,  Surya! Thanks for joining Information Technology. Have a nice day!
// Your Details: Surya 30 Sathyabama University Information Technology
