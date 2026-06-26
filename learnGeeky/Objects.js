const car = {
    name : "Honda",
    start : function() {
        return `The car ${this.name} is started! Boom Boom`
    }
}
console.log(car.start());
car.name = "Toyota"
console.log(car.start());
car.tyre = "Ceat"
console.log(car.tyre);
console.log(car);

