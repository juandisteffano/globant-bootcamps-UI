import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import './EditMovie.css';
import Movie from './Movie';


export default class CreateMovie extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            movie : this.props.movie
        }
        this.saveMovie = this.saveMovie.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

   

    render(){
        if(this.state.show){
            return (
                <div className="editMovie">
                    <section>
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Name"
                            id = "nameEdit"
                            type = "text"
                            value = {this.state.movie.name}
                            onChange = {this.onChange}
                        />
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Duration"
                            id = "durationEdit"
                            type = "text"
                            value = {this.state.movie.duration}
                            onChange = {this.onChange}
                        />
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Year"
                            id = "yearEdit"
                            type = "text"
                            value = {this.state.movie.year}
                            onChange = {this.onChange}
                        />
                        <CustomButton 
                            className = "customButton save"
                            content = "Save"
                            onClick = {this.saveMovie}
                            disabled = {false}
                        /> 
                        <CustomButton 
                            className = "customButton cancel"
                            content = "Cancel"
                            onClick = {this.handleCancelClick}
                            disabled = {false}
                        /> 
                    </section>
            
                    
                </div>
            )
        }else{
            return (
                <div className="editMovie">
                        <CustomButton
                            className = "button edit"
                            content = "Edit"
                            onClick =  {this.handleEditClick}
                            disabled = {false}
                        />
                </div>
            )
        }
    }

 
    saveMovie(){
        let movie = this.createNewMovie(); 
        this.props.replaceMovie(movie, this.props.pos);
        this.setState({show: false});

    }

   

    createNewMovie() {
        let movie = new Movie(
            document.getElementById("nameEdit").value,
            document.getElementById("durationEdit").value,
            document.getElementById("yearEdit").value
        );
        return movie;
    }

    handleEditClick(){
        this.setState({movie : this.props.movie})
        this.setState({show: true});
    }
    handleCancelClick(){
        this.setState({show: false});
    }
    
    onChange(event) {
        this.setState({movie : this.createNewMovie()})
        /*
        if(event.target.id === "nameEdit"){
            this.setState({
            movie: { name: event.target.value }
            });
        }else if (event.target.id === "durationEdit"){
            this.setState({
              movie: { duration: event.target.value }
            });
        }else if (event.target.id === "yearEdit"){
            this.setState({
              movie: { year: event.target.value }
            });
        }
        */
    }


}
