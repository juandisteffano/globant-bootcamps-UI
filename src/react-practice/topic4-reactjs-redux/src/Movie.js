export default class Movie {
    
    constructor(name, duration, year, id){
        this.name = name;
        this.duration = duration;
        this.year = year;
        this.id = id;
    }


    show(){
        return(this.id + " - Name: " + this.name +
                " Duration: " + this.duration +
                " Year: " + this.year)
    }
}