interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;


let mobileNum = "9047048344"; // Pattern - [6-9]\d{9}  or ^[6-9][0-9]{9}$

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

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}



// original record should match the new record
// Existing user credentials should match the new user credentials

let strings = ["Hello", "98052", "101"];

// validators
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();


for (let s of strings){
    for (let name in validators){
        console.log('Name: ' + name);
        console.log('String: ' + s);
        console.log(validators[name].isAcceptable(s));
    }
}