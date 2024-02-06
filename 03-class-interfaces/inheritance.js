var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class NameChecker implements Checkable {
//     checkName(name: string): boolean {
//         if(name.length <= 6) {
//             console.log(name + ' Name is not valid');
//             return false;
//         }
//         console.log( name + ' Name is valid');
//         return true;
//     }
//     checkAge(age?: number | undefined): boolean {
//         if(age < 18) {
//             console.log(age + ' Age is not eligible');
//             return false;
//         }
//         console.log(age + ' Age is eligible');
//         return true;
//     }
// }
// // Instance of the class
// const nameChecker = new NameChecker();
// nameChecker.checkAge('Praveen');
// nameChecker.checkName('Sowmya');
var NameAgeChecker = /** @class */ (function () {
    function NameAgeChecker() {
    }
    NameAgeChecker.prototype.checkAge = function (age) {
        if (age < 18) {
            console.log(age + ' Age is not eligible');
            return false;
        }
        console.log(age + ' Age is eligible');
        return true;
    };
    NameAgeChecker.prototype.checkName = function (name) {
        if (name.length <= 6) {
            console.log(name + ' Name is not valid');
            return false;
        }
        console.log(name + ' Name is valid');
        return true;
    };
    return NameAgeChecker;
}());
// instance of the class
var ageChecker = new NameAgeChecker();
ageChecker.checkAge(20);
ageChecker.checkAge(17);
ageChecker.checkName('Praveen');
ageChecker.checkName('Sowmya');
// Class to Class Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('Moving');
    };
    Animal.prototype.eat = function () {
        console.log('Eating Flesh');
    };
    Animal.prototype.sleep = function () {
        console.log('Sleeping for so long!');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function (times) {
        console.log('Meow for ' + times + ' times');
    };
    // override method
    Cat.prototype.sleep = function (name) {
        if (name === undefined) {
            _super.prototype.sleep.call(this); // call the parent method
        }
        else {
            console.log(name + ' is sleeping for 10 hours');
        }
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function (times) {
        console.log('Wooof for ' + times + ' times');
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log('*************');
dog.move();
dog.woof(3);
dog.eat();
console.log('*************');
var cat = new Cat();
console.log('*************');
cat.move();
cat.meow(30);
cat.eat();
cat.sleep('Persian Cat');
cat.sleep();
console.log('*************');
