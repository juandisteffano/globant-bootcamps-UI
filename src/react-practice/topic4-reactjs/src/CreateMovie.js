import React from 'react';
import './CreateMovie.css';
import CustomButton from './CustomButton';
import FormMovie from './FormMovie'


export default class CreateMovie extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movie: "",
            disabledButton : true,
        };
        this.onChange = this.onChange.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
    }

    render(){
        return (
            <div className="createMovie">
                <header>Create New</header>
                <section>
                    <FormMovie
                        id = "createForm"
                        formType = "Create"
                        movie = {this.state.movie}
                        onChange = {this.onChange}
                    />
                    <CustomButton 
                        className = "button-large create"
                        content = "Create"
                        onClick = {this.saveMovie}
                        disabled = {this.state.disabledButton}
                    /> 
                </section>
            </div>
        )
    }


    saveMovie(){
        this.props.addMovie(this.state.movie);
        this.onChange(null,false);
    }

    onChange(movie, allFieldComplete){
        this.setState({movie: movie,
            disabledButton : !allFieldComplete})
    }
}
