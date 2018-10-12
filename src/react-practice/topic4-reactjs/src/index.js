import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateMovie from './CreateMovie';
import ListMovie from './ListMovie';


import SimpleStorage from "react-simple-storage";


class IndexPage extends React.Component{
    constructor(props) {
        super(props);

        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.replaceMovie = this.replaceMovie.bind(this);

        this.state = {
          movies: [{
                    name: "Pel1",
                    duration: 168,
                    year: 1999,
                },
                { 
                    name: "Pel2",
                    duration: 168,
                    year: 1999,
                },
            ],
        };
    }


    addMovie(movie){
        let moviesAct = Object.assign([], this.state.movies);
        moviesAct.push(movie)
        this.setState({movies: moviesAct});
        localStorage.setItem("movies", moviesAct);
    }

    deleteMovie(index){
        let moviesAct = Object.assign([], this.state.movies);
        moviesAct.splice(index,1);
        this.setState({movies: moviesAct});
        localStorage.setItem("movies", moviesAct);
    }

    replaceMovie(movie, index){
        let moviesAct = Object.assign([], this.state.movies);
        moviesAct[index] = movie;
        this.setState({movies: moviesAct});
        localStorage.setItem("movies", moviesAct);
    }

    render(){
        return (
            <div id = "indexPage">
                <SimpleStorage parent={this} />
                <ListMovie 
                    listMovies = {this.state.movies}
                    deleteMovie = {this.deleteMovie}
                    replaceMovie  = {this.replaceMovie}
                />
                <CreateMovie 
                    onClick = {this.saveMovie}
                    addMovie = {this.addMovie}
                />
            </div>
        )
    }



}



ReactDOM.render(<IndexPage />, document.getElementById('root'));
