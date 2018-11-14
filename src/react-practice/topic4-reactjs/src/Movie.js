export default class Movie {
    
    constructor(name, duration, year){
        this.name = name;
        this.duration = duration;
        this.year = year;
    }

    show(){
        return("Name: " + this.name +
                " Duration: " + this.duration +
                " Year: " + this.year)
    }
}
