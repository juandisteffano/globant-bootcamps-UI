import React from 'react';
import './ListMovie.css';

export default class ListMovie extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    render(){
        const mov = this.props.listMovies.map((movie, num) => {
            return (
                <li key={num}>

                    {movie.name} , {movie.duration} , {movie.year}

                    <button
                        className = "button edit"
                    >Edit</button> 

                    <button
                        pos = {num}
                        className = "button delete"
                        onClick = {(num) => this.handleDeleteClick(num)}
                    >Delete</button> 

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
        this.props.deleteMovie(event.target.getAttribute('pos'));
    }


}

