// type alias 

// Global Variables
let globalVariable: number = 100;

class PersonDetails {
    name: string = ''; // Class variables
    // check undefined for the age
    age: number = 0;
    address: string = '';
    department: string = '';
    _length: number = 0;

    //static variable
    static country: string = 'India';

    // Accessing global variable
    static globalVariable = globalVariable;

    // globalVariable : number = 200;

    // readonly - Private object
    readonly livingAt: string = 'Chennai, India';

    // Getter and Setter
    get length() {
        return this._length;
    }

    set length(length: number) {
        this._length = length;
    }

    // Create COnstructor
    constructor(dept: string) {
        this.department = dept;
        console.log('This invokes the constructor first ' + globalVariable + ' ' + this.length);
    }

    // create a method
    greet() {
        // (this.age === 'undefined') ? this.age : this.age = 0;
        console.log('Your Details: ' + this.name + ' ' + this.age + ' ' + this.address + ' ' + this.department + ', ' + PersonDetails.country);

        return 'Hello, ' + ' ' + this.name + '! Thanks for joining ' + this.department + '.' + ' ' + 'Have a nice day!';
    }
}


export { PersonDetails } // A normal file can be converted into a module