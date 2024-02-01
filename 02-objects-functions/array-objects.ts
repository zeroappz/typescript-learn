// Type named any
let obj: any = {
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

function passwordCheck(password): boolean {
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
    } else {
        return false;
    }

}
let output: any;
output = passwordCheck('123546789');

// console password success status using ternary

if (output) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}


// Function which returns Promise
async function getData(): Promise<string> {
    return 'Praveen Kumar';
}


// Anonymous function - Typescript
// forEach()
const arr = [1, 2, 3, 4];
arr.forEach(function (element) {
    console.log(element * 2);
})

const names = ['Praveen', 'Kumar', 'Prakash', 'Krishna'];
names.forEach(obj => console.log(obj.toUpperCase()));



// Object Function - Typescript
// Object with optional parameters
function printNames(obj: { firstName: string, lastName?: string, age?: number }) { // ? after the property is optional
    console.log('**************');
    console.log(obj.firstName + ' ' + obj.lastName + ' ' + obj.age?.toString());
    console.log('**************');
}

printNames({ firstName: 'Marshal', lastName: 'Dionee', age: 30 });
printNames({ firstName: 'Marshal', lastName: 'Dionee' });
printNames({ firstName: 'Marshal' });


// Union Types
function mobileNumber(mobile: string | number, arr: number[] | string) {
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


// Type Alias - custom defined type object
type Something = {
    name: string,
    age: number
};


// type Something = {
//     name: string,
//     age: number
// };

function someThing(obj: Something | any) {
    console.log(obj.name);
    console.log(obj.age);
}
someThing({ name: 'Praveen', age: 30 });


// Interface - custom defined type object

interface UserInterface {
    name: string;
    age: number,
    greet(phrase: string): void
}

// Invoke Interface
const user: UserInterface = {
    name: "John",
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user.greet("Hello!, I am");