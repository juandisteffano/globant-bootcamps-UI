/*
    ****************************************************
    ****               BONUS POINTS                 ****
    ****      MAKE A 2nd VERSION USING ES6 CLASSES  ****
    ****                                            ****
    ****************************************************
*/

class AnimalClass {
    constructor(type, name, cantPatas) {
        this.type = type;
        this.name = name;
        this.cantPatas = cantPatas;
    }
    talk() {
        console.log("Hi, I'm an Animal, but also a " + this.type);
    };
    walk() {
        console.log("Hi, I'm walking with " + this.cantPatas + " legs.");
    };
    sayYourName() {
        console.log("Hi, my name is: " + this.name);
    };

    get type() {
        return this._type;
    };
    set type(newType) {
        this._type = newType;
    };
    get cantPatas() {
        return this._cantPatas;
    };
    set cantPatas(cant) {
        this._cantPatas = cant;
    };

    get name() {
        return this._name;
    };
    set name(name) {
        this._name = name;
    };
}

function pruebaAnimalClass(){
    let rabbit = new AnimalClass("Rabbit Class", "Nejo", 4);
    rabbit.talk();
    rabbit.walk();
    rabbit.sayYourName();
}