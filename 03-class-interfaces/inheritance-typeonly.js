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
var AnimalHouse = /** @class */ (function () {
    function AnimalHouse(animal) {
        this.resident = animal;
    }
    return AnimalHouse;
}());
var DogHouse = /** @class */ (function (_super) {
    __extends(DogHouse, _super);
    function DogHouse(dog) {
        var _this = _super.call(this, dog) || this;
        console.log(_this.resident);
        return _this;
    }
    // method to execute all the animals
    DogHouse.prototype.dogDetails = function () {
        console.log(this.resident.dateOfBirth);
        console.log(this.resident.breed);
    };
    return DogHouse;
}(AnimalHouse));
// instance of Dog
var myDog = new DogHouse({ dateOfBirth: '10/10/2023', breed: 'Bulldog' });
myDog.dogDetails();
