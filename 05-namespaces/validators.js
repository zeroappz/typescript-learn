var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var mobileNum = "9047048344"; // Pattern - [6-9]\d{9}  or ^[6-9][0-9]{9}$
// validate it with regex
/*
1. Length of the number should be 10
2. First number should be 6,7,8 or 9
3. Last number should be 0-9 (optional)

Regular Expression
Meta Characters - \d \w \s - Except the given 3 - \D \W \S
Quantifiers - {m, n}, +, *, ?
Grouping - ()
Character Classes - Character Range - [a-zA-Z0-9#$@!%^&]{8,16} - Praveen2692#$@
*/
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
// original record should match the new record
// Existing user credentials should match the new user credentials
var strings = ["Hello", "98052", "101"];
// validators
var validators = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log('Name: ' + name_1);
        console.log('String: ' + s);
        console.log(validators[name_1].isAcceptable(s));
    }
}
