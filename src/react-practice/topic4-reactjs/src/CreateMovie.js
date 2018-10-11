import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import './CreateMovie.css';
import Movie from './Movie';


export default class CreateMovie extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            disabledButton : true,
        };
        this.changedInput = this.changedInput.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
    }

   

    render(){

        return (
            <div className="createMovie">
                <header>Create New</header>
                <section>
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Name"
                        id = "name"
                        type = "text"
                        onChange = {this.changedInput}
                    />
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Duration"
                        id = "duration"
                        type = "text"
                        onChange = {this.changedInput}
                    />
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Year"
                        id = "year"
                        type = "text"
                        onChange = {this.changedInput}
                    />
                    <CustomButton 
                        className = "customButton"
                        content = "Create Movie"
                        onClick = {this.saveMovie}
                        disabled = {!this.state.disabledButton}
                    /> 
                </section>
        
                
            </div>
        )
    }

    saveMovie(){

        let movie = this.createNewMovie(); 
        
        //Para gregar en el dueño del componente
        this.props.addMovie(movie);

        //Limpiar campos y avisar el cambio
        this.clearFields();
    }

    buttonDisabled(){
        if(document.getElementById("name").value !== "" &&
            document.getElementById("duration").value !== "" &&
            document.getElementById("year").value !== "" )
            return false;

        return true;
    }
   
    changedInput(){
        this.setState({disabledButton : this.buttonDisabled()})
    }

    createNewMovie() {
        let movie = new Movie(
            document.getElementById("name").value,
            document.getElementById("duration").value,
            document.getElementById("year").value
        );
        return movie;
    }

    clearFields(){
        document.getElementById("name").value = "";
        document.getElementById("duration").value = "";
        document.getElementById("year").value = "";
        this.changedInput();
    }

}
