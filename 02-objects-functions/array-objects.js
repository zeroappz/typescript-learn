"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Type named any
var obj = {
    x: 0,
    y: 0
};
console.log(obj.x, obj.y);
obj.x = 10;
obj.y = 20;
obj = "Sathyabama";
// let obj: string
console.log(obj); // 10 20
// noImplicitAny: true
function passwordCheck(password) {
    // Ternary condition check for the password with min 6 and mx 16 characters
    // (password.length >= 6 && password.length <= 16) ? true : false;
    // check the undefined status of password
    console.log('*******************');
    console.log(password);
    console.log('*******************');
    if (password === undefined) {
        return false;
    }
    if (password.length >= 6 && password.length <= 16) {
        return true;
    }
    else {
        return false;
    }
}
var output;
output = passwordCheck('123546789');
// console password success status using ternary
if (output) {
    console.log('Password is valid');
}
else {
    console.log('Password is invalid');
}
// Function which returns Promise
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 'Praveen Kumar'];
        });
    });
}
// Anonymous function - Typescript
// forEach()
var arr = [1, 2, 3, 4];
arr.forEach(function (element) {
    console.log(element * 2);
});
var names = ['Praveen', 'Kumar', 'Prakash', 'Krishna'];
names.forEach(function (obj) { return console.log(obj.toUpperCase()); });
// Object Function - Typescript
// Object with optional parameters
function printNames(obj) {
    var _a;
    console.log('**************');
    console.log(obj.firstName + ' ' + obj.lastName + ' ' + ((_a = obj.age) === null || _a === void 0 ? void 0 : _a.toString()));
    console.log('**************');
}
printNames({ firstName: 'Marshal', lastName: 'Dionee', age: 30 });
printNames({ firstName: 'Marshal', lastName: 'Dionee' });
printNames({ firstName: 'Marshal' });
// Union Types
function mobileNumber(mobile, arr) {
    if (typeof mobile === 'string') {
        console.log('It is of type string');
        console.log(mobile.length);
        console.log(mobile[0]);
        if (Array.isArray(arr)) {
            console.log('It is of type array');
            // return arr;
        }
        console.log(mobile.slice(0, 4)); // slice(0, n-1)
        return mobile;
    }
    else if (typeof mobile === 'number') {
        console.log('It is of type number');
        // console.log(mobile.length);
        return mobile;
    }
}
mobileNumber('1234567890', [1, 2, 3]); // It is of type string
console.log('**************');
mobileNumber(1234567890, '123'); // It is of type number
// type Something = {
//     name: string,
//     age: number
// };
function someThing(obj) {
    console.log(obj.name);
    console.log(obj.age);
}
someThing({ name: 'Praveen', age: 30 });
// Invoke Interface
var user = {
    name: "John",
    age: 30,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name + ' ' + this.age);
    }
};
user.greet("Hello!, I am");
