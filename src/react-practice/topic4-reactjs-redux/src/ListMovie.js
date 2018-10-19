import React from 'react';
import './ListMovie.css';
import CustomButton from './CustomButton';
import EditMovie from './EditMovie';

//Redux
import { connect } from 'react-redux';

export class ListMovie extends React.Component {
    render(){
        const mov = this.props.movies.map((movie, num) => {
            return (
                <li key={num} >

                    {movie.name} , {movie.duration} , {movie.year}


                   <CustomButton
                        className = "button-small delete"
                        onClick = {() => this.props.handleDeleteClick(movie)}
                        content = "Delete"
                        disabled = {false}
                    />

                    <EditMovie 
                        movieFromList = {movie}
                    />

                </li>
            );
        });


        return (
            <div className="listMovie">
                <header>Favorites Movies</header>
                <section>
                    <ol>
                        {mov.length>0 ? mov : <h1>Not Movies</h1>}
                    </ol>  
                </section>
            </div>
        )
    }

    
   
}


const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
}

const mapDispatchToProps = dispatch => {
  return{
    handleDeleteClick(movie){
        const action = {
            type: "DELETE_MOVIE",
            movie
        }
        dispatch(action);
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMovie);