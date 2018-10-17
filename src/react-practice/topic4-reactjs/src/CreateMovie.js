import React from 'react';
import './CreateMovie.css';
import CustomButton from './CustomButton';
import FormMovie from './FormMovie'
//import Movie from './Movie';


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

    /*
    saveMovie(){

        let movie = this.createNewMovie(); 
        
        //Para gregar en el dueño del componente
        this.props.addMovie(movie);

        //Limpiar campos y avisar el cambio
        this.clearFields();
    }
    */
    saveMovie(){

        //let movie = this.createNewMovie(); 
        
        //Para gregar en el dueño del componente
        this.props.addMovie(this.state.movie);
        //Limpiar campos y avisar el cambio
        //this.clearFields();
        this.onChange(null,false);
    }
/*
    buttonDisabled(){
        /
        if(document.getElementById("nameCreate").value !== "" &&
            document.getElementById("durationCreate").value !== "" &&
            document.getElementById("yearCreate").value !== "" )
            return false;
            /
        if(document.getElementById("nameCreate").value &&
            document.getElementById("durationCreate").value &&
            document.getElementById("yearCreate").value)
            return false;
        return true;
    }
*/
/*
    createNewMovie() {
        let movie = new Movie(
            document.getElementById("nameCreate").value,
            document.getElementById("durationCreate").value,
            document.getElementById("yearCreate").value
        );
        return movie;
    }
*/
/*
    clearFields(){
        
        document.getElementById("nameCreate").value = "";
        document.getElementById("durationCreate").value = "";
        document.getElementById("yearCreate").value = "";
       
    }
    */
    /*
    changedInput(){
        this.setState({disabledButton : this.buttonDisabled()})
    }
    */
    onChange(movie, allFieldComplete){
        this.setState({movie: movie,
            disabledButton : !allFieldComplete})
    }

}
