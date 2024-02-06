"use strict";
// type alias 
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDetails = void 0;
// Global Variables
var globalVariable = 100;
var PersonDetails = /** @class */ (function () {
    // Create COnstructor
    function PersonDetails(dept) {
        this.name = ''; // Class variables
        // check undefined for the age
        this.age = 0;
        this.address = '';
        this.department = '';
        this._length = 0;
        // globalVariable : number = 200;
        // readonly - Private object
        this.livingAt = 'Chennai, India';
        this.department = dept;
        console.log('This invokes the constructor first ' + globalVariable + ' ' + this.length);
    }
    Object.defineProperty(PersonDetails.prototype, "length", {
        // Getter and Setter
        get: function () {
            return this._length;
        },
        set: function (length) {
            this._length = length;
        },
        enumerable: false,
        configurable: true
    });
    // create a method
    PersonDetails.prototype.greet = function () {
        // (this.age === 'undefined') ? this.age : this.age = 0;
        console.log('Your Details: ' + this.name + ' ' + this.age + ' ' + this.address + ' ' + this.department + ', ' + PersonDetails.country);
        return 'Hello, ' + ' ' + this.name + '! Thanks for joining ' + this.department + '.' + ' ' + 'Have a nice day!';
    };
    //static variable
    PersonDetails.country = 'India';
    // Accessing global variable
    PersonDetails.globalVariable = globalVariable;
    return PersonDetails;
}());
exports.PersonDetails = PersonDetails;
