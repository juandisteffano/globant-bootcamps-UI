class DogClass extends AnimalClass {
    constructor(name){
        super("Dog", name, 4)
    }

    talk() {
        console.log("Hi, I'm an Dog and my name is: " + this.name);
    };
}

function pruebaDogClass(){
    let rabbit = new DogClass("Pluto");
    rabbit.talk();
    rabbit.walk();
    rabbit.sayYourName();
}