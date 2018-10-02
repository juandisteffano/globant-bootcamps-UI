/*
1. Create a Movie object:

Movie
- title 
- year 
- duration
+ play() 
+ pause()
+ resume()
*/


var MoviePrototype = function (title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
}

MoviePrototype.prototype = {
    play: function(){
        console.log("Play Movie: " + this.title)
    },
    pause: function(){
        console.log("Pause Movie: " + this.title)
    },
    resume: function(){
        console.log("Resume Movie: " + this.title)
    }
}

/*
2. Instantiate some of your favorite movies and play with them in the console.
*/
function pruebaCreacionMovie(){
    var hp = new MoviePrototype("Harry Potter",1999,136);
    hp.play();
    hp.pause();
    hp.resume();
}


/*
3. Create an EventEmitter class with the following methods: on, emit, off. 
The on method will allow to pass a callback or listener that will be executed each time a given 
event is triggered. 
The emit method will allow a class to trigger events to be consumed by other functions/objects. 
The off method will delete the listener.
*/

class EventEmitter {
    constructor(){
        this.events = {};
    }
  
    on(eventName, callback){
        //this.events.push({"name": name, "event": callback()});

        if( !this.events[eventName] ) {
            this.events[eventName] = [];
            }
            
            this.events[eventName].push(callback);
    }
    //The emit method will allow a class to trigger events to be consumed by other functions/objects. 
    emit(eventName, data){
        const event = this.events[eventName];
        if( event ) {
            event.forEach(fn => {
                fn.call(null, data);
            });
        }
    }
   // The off method will delete the listener.
    off(name, callback){

    }
}


/*
4. Make Movie a subclass of EventEmitter. Publish "play" event on Movie.play(), 
"pause" event on Movie.pause(), and "resume" event on Movie.resume()
*/

class Movie extends EventEmitter {
    constructor(title,year,duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];

        this.on("Play", function (p, title){ console.log("Play: "+ title)});
        this.on("Pause", function (p, title){ console.log("Pause: "+ title)});
        this.on("Resume", function (p, title){ console.log("Resume: "+ title)});
        console.log(this.events);

    }
    play(){
        //console.log("Play Movie: " + this.title)
        this.emit("Play", this.title);
    }
    pause(){
        //console.log("Pause Movie: " + this.title)
        this.emit("Pause", this.title);
    }
    resume(){
        //console.log("Resume Movie: " + this.title)
        this.emit("Resume", this.title);
    }

    addCast(castAdd){
        //PREGUNTAR SI ES LA FORMA CORRECTA
        if(Array.isArray(castAdd)){
            this.cast = this.cast.concat(castAdd);
        }else{
            this.cast.push(castAdd);
        }
    }
}

function pruebaEmmiter(){
    var ironman = new Movie("Ironman", 2003, 195);
    ironman.play();
    ironman.pause();
    ironman.resume();
}


/*
5. Create a Logger class with a log(info) method that will output info to the console. 
Make log listen to a Movie's 'play' event. You should be able to do something like this in the 
console:

let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
terminator.on('play', logger.log);
// ...
terminator.play(); // output: The 'play' event has been emitted
*/

/*
6. Create an object called Social with methods share(friendName) and like(friendName) that will 
generate the following output "{friendName} likes/share {Movie Name}". Hint: declare Social as an 
object literal, use Object.assign to mix Social methods into a Movie instance. Use Template 
Literals to generate the like/share method output. You should be able to do something like this 
in the console:

ironman.share('Mike Blossom'); // output: Share Iron Man with Mike Blossom
*/


function pruebaAssignMethods(){
    var ironman = new Movie("Ironman", 2003, 195);
    var Social = {
        share: function (friendName){
            console.log(" share " + this.title + " with " + friendName);
        },
        like: function (friendName){
            console.log(friendName + " likes " + this.title);
        }
    }

    Object.assign(ironman,Social);

    ironman.share('Mike Blossom');
}

/*
7. Create an Actor class and create some actors from one of your favorite movies.
*/

class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
/*
8. Add a method to Movie that will allow to add one or more actors at the same time.

let terminator = new Movie('Terminator I', 1985, 60);
let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast); //Movie must contain an array of 4 actors
*/

function pruebaAddCast(){
    let terminator = new Movie('Terminator I', 1985, 60);
    let arnold = new Actor('Arnold Schwarzenegger', 50);
    let otherCast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
    ];

    terminator.addCast(arnold);
    terminator.addCast(otherCast); //Movie must contain an array of 4 actors
    console.log(terminator);
}

/*
9. Using ES6 Modules split all your classes declarations into diferent files. Use Babel to 
create a single bundle. Hint: check this tutorial
*/



