namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

namespace Validation {
        
        const numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
// let stringValidator: Validation.StringValidator;

let stringsObj = ["Hello", "98052", "101"];

// validators
let validatorsObj: { [s: string]: Validation.StringValidator; } = {};
validatorsObj["ZIP code"] = new Validation.ZipCodeValidator();
validatorsObj["Letters only"] = new Validation.LettersOnlyValidator();


for (let s of stringsObj){
    for (let name in validatorsObj){
       console.log(
        `Name: ${name} String: ${s} 
        Result: ${validatorsObj[name].isAcceptable(s)? 'Acceptable' : 'Not Acceptable'}`
       )
    }
}

/*
Name: Letters only String: 101 
        Result: Not Acceptable
Name: Letters only String: Hello
        Result: Acceptable
*/