
var Animal = (function(type) {
    this.type = type;
});

Animal.prototype.talk = function() {
    console.log("Hi, I'm an Animal, but also a "+ this.type);
};

function pruebaAnimalPrototyeBasic(){

    let rabbit = new Animal("Rabbit");
    rabbit.talk();
}



/*
    Now it's your turn to make some changes
    - Refactor the previous code to use getters and settters
    */
Animal.prototype.getType = function() {
    return this.type;
};
Animal.prototype.setType = function(newType) {
    this.type = newType;
};

Animal.prototype.talk = function() {
    console.log("Hi, I'm an Animal, but also a " + this.getType());
};


//- Add at least 2 more properties
/*
var Animal = (function(type, name, cantPatas) {
    this.type = type;
    this.name = name;
    this.cantPatas = cantPatas;
});
*/
Animal.prototype.addProp = function (name, cantPatas){
    this.name = name;
    this.cantPatas = cantPatas;
}

//- Add at least 2 more methods
Animal.prototype.getLegs = function() {
    return this.cantPatas;
};
Animal.prototype.setLegs = function(cant) {
    this.cantPatas = cant;
};
Animal.prototype.walk = function() {
    console.log("Hi, I'm walking whit " + this.getLegs() + " legs.");
};

Animal.prototype.getName = function() {
    return this.name;
};
Animal.prototype.setName = function(name) {
    this.name = name;
};
Animal.prototype.sayYourName = function() {
    console.log("Hi, my name is: " + this.getName());
};


function pruebaAnimalPrototyeModif(){
    //let rabbit = new Animal("Rabbit Prototipe", "Nejo", 4);
    let rabbit = new Animal("Rabbit Prototipe");
    rabbit.addProp("Nejo", 4)
    rabbit.talk();
    rabbit.walk();
    rabbit.sayYourName();
}

//- Create a new class that inherits from Animal
var Dog = function (name){
    Animal.call(this, "Dog Prototype");
    this.addProp(name, 4);
}
Dog.prototype = Object.create(Animal.prototype);

//- Override one of the methods you previously defined

Dog.prototype.sayYourName = function() {
    console.log("Guau Guau: " + this.getName());
};


function pruebaDogPrototye(){
    //let rabbit = new Animal("Rabbit Prototipe", "Nejo", 4);
    let dog = new Dog("Pluto");
    dog.talk();
    dog.walk();
    dog.sayYourName();
}


