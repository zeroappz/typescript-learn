// Class - Concrete Class - which is of 100% access
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
var ClassName = /** @class */ (function () {
    // Constructor
    function ClassName(name) {
        this.age = 30;
        this.name = name;
    }
    // Method - proper defined method
    ClassName.prototype.anyMethod = function () {
        console.log('defined method of abstract class');
        // access private variable
        console.log('Accessing Abstract Class private variable: ' + this.age);
    };
    return ClassName;
}());
// Inherit the abstract class
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        var _this = _super.call(this, 'Praveen Kumar') || this;
        _this.bankAccNum = "309004747305";
        _this.livingAt = 'Chennai, India';
        return _this;
    }
    // Abstract Method
    SubClass.prototype.abstractMethod = function () {
        console.log('abstract method');
        this.safeData = 'safe data secured information';
        console.log(this.safeData);
        console.log(this.name);
        // access private variable
        console.log(this.bankAccNum);
        // access inherited private variable age
        // console.log(this.age); - won't work
    };
    return SubClass;
}(ClassName));
try {
    // Create an object
    var obj = new SubClass();
    obj.anyMethod();
    obj.abstractMethod();
}
catch (error) {
    console.log(error);
}
