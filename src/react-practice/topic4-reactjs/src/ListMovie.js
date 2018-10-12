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

                    <EditMovie 
                        movie = {movie}
                        replaceMovie = {this.props.replaceMovie}
                        pos = {num}
                    />
                   
                    <CustomButton
                        className = "button delete"
                        onClick = {this.handleDeleteClick}
                        content = "Delete"
                        disabled = {false}
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

   



/*
    <CustomButton
    className = "button edit"
    content = "Edit"
    onClick =  {this.handleEditClick}
    disabled = {false}

/>
*/
}

