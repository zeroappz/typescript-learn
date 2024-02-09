var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// let stringValidator: Validation.StringValidator;
var stringsObj = ["Hello", "98052", "101"];
// validators
var validatorsObj = {};
validatorsObj["ZIP code"] = new Validation.ZipCodeValidator();
validatorsObj["Letters only"] = new Validation.LettersOnlyValidator();
for (var _i = 0, stringsObj_1 = stringsObj; _i < stringsObj_1.length; _i++) {
    var s = stringsObj_1[_i];
    for (var name_1 in validatorsObj) {
        console.log("Name: ".concat(name_1, " String: ").concat(s, " \n        Result: ").concat(validatorsObj[name_1].isAcceptable(s) ? 'Acceptable' : 'Not Acceptable'));
    }
}
