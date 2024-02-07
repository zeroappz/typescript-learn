// Class - Concrete Class - which is of 100% access

// Abstract Class - which is of partial access

// super() - calls the constructor of the parent class
// super.anyMethod() - calls the method of the parent class
// super.attribute - calls the attribute of the parent class

// Interface - Completely restricted class

interface AnyInterface {
    anyMethod();
}


abstract class ClassName implements AnyInterface {
    // Properties
    protected name: string;
    private age: number = 30;
    // Constructor
    constructor(name: string) {
        this.name = name;
    }
    // Method - proper defined method
    anyMethod() {
        console.log('defined method of abstract class');
        // access private variable
        console.log('Accessing Abstract Class private variable: ' + this.age);
    }

    // Abstract Method
    abstract abstractMethod();
}

// Inherit the abstract class
class SubClass extends ClassName {

    // Access Modifiers
    protected safeData: string;
    private bankAccNum: string = "309004747305";
    readonly livingAt: string = 'Chennai, India';
    constructor() {
        super('Praveen Kumar');
    }
    // Abstract Method
    abstractMethod() {
        console.log('abstract method');
        this.safeData = 'safe data secured information';
        console.log(this.safeData);
        console.log(this.name);
        // access private variable
        console.log(this.bankAccNum);
        // access inherited private variable age
        // console.log(this.age); - won't work
    }

}

try {
    // Create an object
    let obj = new SubClass();
    obj.anyMethod();
    obj.abstractMethod();

} catch (error) {
    console.log(error);
}
