//? Define a class named "Car" that represents a vehicle

class Car {
    //?
    constructor() {
        make: this.make
        model: this.model
        speed: this.speed
    }

    details() {
        console.log(`This Car's make is ${this.make} and it's model is ${this.model}`)
    }

    accelerate(mph) {
        this.speed += mph;
        console.log(`This car is going ${this.speed} mph`)
    }

    brake(mph) {
        this.speed -= mph;
        console.log(`This car is going ${this.speed} mph`)
    }
}

//? This created a instance of a "new Car"
let firstCar = new Car();

firstCar.make = "Chevy";
firstCar.model = "Impala";
firstCar.speed = 0;
firstCar.details();
firstCar.accelerate(15);
firstCar.brake(10);
//? You can Provide new constructor values!
// firstCar.tires = 0;

console.log(firstCar)

let secondCar = new Car();

secondCar.make = "Ford";
secondCar.model = "Taurus";

console.log(secondCar);


class Employee {
    //? The constructor method initializes the properties "name", "title", and "catchphrase"
    constructor(name, title, catchPhrase) {
        this.name = name;
        this.title = title;
        this.catchPhrase = catchPhrase;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`)
    }

}

let spongebob = new Employee("Spongebob", "Frycook", "I'm Ready!")
spongebob.introduce();
let squidward = new Employee("Squidward", "Cashier", "I hate everyone.")
console.log(spongebob);
console.log(squidward);