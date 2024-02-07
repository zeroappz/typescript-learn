// Exception Handling is used to handle the errors
function dividingValues(a: number, b: number, iterable: number) {
    let c = a / b; // ZeroDivisionError
    console.log(c);

    listOfNumbers: for (let i = 0; i < iterable; i++) {
        console.log(i);
    }
    console.log('End of Program');
}

try {
    let a = 10;
    let b = 0;
    dividingValues(a, b, 10);
    let objArrayString = ['a', 'b', 'c', 'd'];
    // objArrayString.length <= 3 ? console.log(objArrayString[2]) : console.log('No more than 3 elements');
    // throw new Error('Something went wrong');
    console.log('End of Program');
    console.log.apply(console, new Array(100).fill('Praveen'));
    // Type Error
    (1.2345455).toFixed(2); // true
    // ('1.2345455').toFixed(2); // false
    console.log(3 * 3);
    console.log(2 ** 3);
    // console.log(2***3); // SYNTAX ERROR
}
catch (error) {
    console.log(error);
}

// Callback Function
function myFunction(callback: (e?: Error) => void) {
    doSomethingAsync(
        function () {
            if (10 > 5) {
                callback(new Error('Something went wrong'));
            } else {
                callback();
            }
        }
    )
}

function doSomethingAsync(arg0: () => void) {
    throw new Error("Function not implemented.");
}
