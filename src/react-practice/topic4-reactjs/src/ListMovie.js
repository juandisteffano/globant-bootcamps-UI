import React from 'react';
import './ListMovie.css';
import CustomButton from './CustomButton';
import EditMovie from './EditMovie';

export default class ListMovie extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    render(){
        const mov = this.props.listMovies.map((movie, num) => {
            return (
                <li key={num} pos={num}>
                    {movie.name} , {movie.duration} , {movie.year}

                   <CustomButton
                        className = "button-small delete"
                        onClick = {this.handleDeleteClick}
                        content = "Delete"
                        disabled = {false}
                    />

                    <EditMovie 
                        movie = {movie}
                        replaceMovie = {this.props.replaceMovie}
                        pos = {num}
                    />

                </li>
            );
        });


        return (
            <div className="listMovie">
                <header>Favorites Movies</header>
                <section>
                    <ol>
                        {mov}
                    </ol>  
                </section>
            </div>
        )
    }

    handleDeleteClick(event){
        this.props.deleteMovie(event.target.parentElement.getAttribute('pos'));
    }
}
