import React from 'react';
import './EditMovie.css';
import CustomButton from './CustomButton';
import FormMovie from './FormMovie';


export default class EditMovie extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            movie : this.props.movie,
            disabledSaveButton : false,
        }
        this.saveMovie = this.saveMovie.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

   
//Consultar mejor forma de mostar elementos
    render(){
        if(this.state.show){
            return (
                <div className="editMovie">
                        
                        <FormMovie
                            id = "editForm"
                            formType = "Edit"
                            movie = {this.state.movie}
                            onChange = {this.onChange}
                            pos = {this.props.pos}
                            onLoad = {this.onLoad}
                        />
                        <footer>
                            <CustomButton 
                                className = "button-medium save"
                                content = "Save"
                                onClick = {this.saveMovie}
                                disabled = {this.state.disabledSaveButton}
                            /> 
                            <CustomButton 
                                className = "button-medium cancel"
                                content = "Cancel"
                                onClick = {this.handleCancelClick}
                                disabled = {false}
                            /> 
                        </footer>
                </div>
            )
        }else{
            return (
                <CustomButton
                    className = "button-small edit"
                    content = "Edit"
                    onClick =  {this.handleEditClick}
                    disabled = {false}
                />
            )
        }
    }

    saveMovie(){
        let movie = this.state.movie; 
        this.props.replaceMovie(movie, this.props.pos);
        this.setState({show: false});

    }
   

    handleEditClick(){
        this.setState({movie : this.props.movie})
        this.setState({show: true});
    }
    handleCancelClick(){
        this.setState({show: false});
    }
    
    /*
    onChange(event) {
        this.setState({
            movie: { name: document.getElementById("nameEdit"+ this.props.pos).value,
                    duration: document.getElementById("durationEdit" + this.props.pos).value,
                    year: document.getElementById("yearEdit" + this.props.pos).value }
            });
    }
    */
    onChange(movie, allFieldComplete) {
        this.setState({
            movie: movie,
            disabledSaveButton: !allFieldComplete,
            });
    }

   
    componentDidUpdate(){
        Array.from(document.getElementsByClassName("editMovie")).map((value) => {
            if(!value.className.includes("efect"))
                value.className += " efect"
            return 0;
        })
    }

}
