// Exception Handling is used to handle the errors
function dividingValues(a, b, iterable) {
    var c = a / b; // ZeroDivisionError
    console.log(c);
    listOfNumbers: for (var i = 0; i < iterable; i++) {
        console.log(i);
    }
    console.log('End of Program');
}
try {
    var a = 10;
    var b = 0;
    dividingValues(a, b, 10);
    var objArrayString = ['a', 'b', 'c', 'd'];
    // objArrayString.length <= 3 ? console.log(objArrayString[2]) : console.log('No more than 3 elements');
    // throw new Error('Something went wrong');
    console.log('End of Program');
    console.log.apply(console, new Array(100).fill('Praveen'));
    // Type Error
    (1.2345455).toFixed(2); // true
    // ('1.2345455').toFixed(2); // false
    console.log(3 * 3);
    console.log(Math.pow(2, 3));
}
catch (error) {
    console.log(error);
}
