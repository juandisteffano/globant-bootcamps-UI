import React from 'react';
import './FormMovie.css';
import CustomInput from './CustomInput';
import Movie from './Movie';


export default class FormMovie extends React.Component {
    constructor(props){
        super(props);

        this.getId = this.getId.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    render(){
            return (
                <div className="formMovie">
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Name"
                            id = {this.getId("name")}
                            type = "text"
                            value = {this.props.movie ? this.props.movie.name : ''}
                            onChange = {this.onChange}
                        />
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Duration"
                            id = {this.getId("duration")}
                            type = "text"
                            value = {this.props.movie ? this.props.movie.duration : ''}
                            onChange = {this.onChange}
                        />
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Year"
                            id = {this.getId("year")}
                            type = "text"
                            value = {this.props.movie ? this.props.movie.year : ''}
                            onChange = {this.onChange}
                        />
                </div>
            )
    }

    getId(inputFieldId){
        /*
                            id = {this.props.pos ? 
                                    "name" + this.props.formType + this.props.pos : 
                                    "name" + this.props.formType}
                            id = {this.props.pos ?
                                    "duration" + this.props.formType + this.props.pos :
                                    "duration" + this.props.formType}
        
                            id = {this.props.pos ?
                                    "year" + this.props.formType + this.props.pos :
                                    "year" + this.props.formType}
        */
      
        return (this.props.pos ?
                inputFieldId + this.props.formType + this.props.pos :
                inputFieldId + this.props.formType)
    }

    onChange(){
        this.props.onChange(
            /*
            new Movie(
                document.getElementById("name" + this.props.formType + this.props.pos).value,
                document.getElementById("duration"+ this.props.formType  + this.props.pos).value,
                document.getElementById("year"+ this.props.formType  + this.props.pos).value
            )
            */
           new Movie(
                document.getElementById(this.getId("name")).value,
                document.getElementById(this.getId("duration")).value,
                document.getElementById(this.getId("year")).value
            ), 
            this.allFieldsComplete()
        );
    }

    allFieldsComplete(){
        if(
            document.getElementById(this.getId("name")).value &&
            document.getElementById(this.getId("duration")).value &&
            document.getElementById(this.getId("year")).value)
            return true;
        return false;
    }

    

}
