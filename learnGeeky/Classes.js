class Greeter {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMeAboutYourself() {
        return `Hi, My name is ${this.name} and I am ${this.age} years old!`;
    }
}

const person1 = new Greeter("Krishn", "20");
const person2 = new Greeter("Krishna", "21");

console.log(person1.tellMeAboutYourself());
console.log(person2.tellMeAboutYourself());
