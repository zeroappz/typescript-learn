interface Checkable {
    checkAge(age?: number): boolean;
    checkName(name?: string): boolean;
}

// class NameChecker implements Checkable {
//     checkName(name: string): boolean {
//         if(name.length <= 6) {
//             console.log(name + ' Name is not valid');
//             return false;
//         }
//         console.log( name + ' Name is valid');
//         return true;
//     }
//     checkAge(age?: number | undefined): boolean {
//         if(age < 18) {
//             console.log(age + ' Age is not eligible');
//             return false;
//         }
//         console.log(age + ' Age is eligible');
//         return true;
//     }
// }

// // Instance of the class
// const nameChecker = new NameChecker();
// nameChecker.checkAge('Praveen');
// nameChecker.checkName('Sowmya');


class NameAgeChecker implements Checkable {
    checkAge(age: number): boolean {
        if (age < 18) {
            console.log(age + ' Age is not eligible');
            return false;
        }
        console.log(age + ' Age is eligible');
        return true;
    }

    checkName(name: string): boolean {
        if (name.length <= 6) {
            console.log(name + ' Name is not valid');
            return false;
        }
        console.log(name + ' Name is valid');
        return true;
    }
}

// instance of the class
const ageChecker = new NameAgeChecker();
ageChecker.checkAge(20);
ageChecker.checkAge(17);
ageChecker.checkName('Praveen');
ageChecker.checkName('Sowmya');

// Class to Class Inheritance
class Animal {
    move() {
        console.log('Moving');
    }
    eat() {
        console.log('Eating Flesh');
    }
    sleep() {
        console.log('Sleeping for so long!');
    }
}

class Cat extends Animal {
    meow(times: number) {
        console.log('Meow for ' + times + ' times');
    }
    // override method
    sleep(name?: string): void {
        if (name === undefined) {
            super.sleep(); // call the parent method
        } else {
            console.log(name + ' is sleeping for 10 hours');
        }
    }
}

class Dog extends Animal {
    woof(times: number) {
        console.log('Wooof for ' + times + ' times');
    }
}

const dog = new Dog();
console.log('*************');
dog.move();
dog.woof(3);
dog.eat();
console.log('*************');

const cat = new Cat();
console.log('*************');
cat.move();
cat.meow(30);
cat.eat();
cat.sleep('Persian Cat');
cat.sleep();
console.log('*************');