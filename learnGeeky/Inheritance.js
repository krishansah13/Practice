class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        return 'Eating...'
    }
    speak() {
        return `${this.name} is a general animal`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return `${this.name} woofs`
    }
}

const dog = new Dog("Tommy");
console.log(dog.speak());
console.log(dog.eat());
