interface Animal {
    dateOfBirth: any;
}

interface Dog extends Animal {
    breed: any;
    // woof(times: number): void;
}

class AnimalHouse {
    // private animals: Animal[] = [];
    // addAnimal(animal: Animal) {
    //     this.animals.push(animal);
    // }
    resident: Animal;

    constructor(animal: Animal) {
        this.resident = animal;
    }
}

class DogHouse extends AnimalHouse {
    declare resident: Dog;
    constructor(dog: Dog) {
        super(dog);
        console.log(this.resident);
    }

    // method to execute all the animals
    dogDetails() {
        console.log(this.resident.dateOfBirth);
        console.log(this.resident.breed);
    }
}

// instance of Dog
const myDog = new DogHouse({ dateOfBirth: '10/10/2023', breed: 'Bulldog' });
myDog.dogDetails();
