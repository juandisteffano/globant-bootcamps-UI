import React from 'react';
import './FormMovie.css';
import CustomInput from './CustomInput';
import Movie from './Movie';

//Redux
import { connect } from 'react-redux';

export class FormMovie extends React.Component {
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
                            //value = {this.props.movieFromList ? this.props.movie.name : ''}
                            value = {this.props.movie.name}
                            onChange = {this.onChange}
                        />
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Duration"
                            id = {this.getId("duration")}
                            type = "text"
                            //value = {this.props.movieFromList ? this.props.movie.duration : ''}
                            value = {this.props.movie.duration}
                            onChange = {this.onChange}
                        />
                        <CustomInput 
                            className = "customInput"
                            placeholder = "Year"
                            id = {this.getId("year")}
                            type = "text"
                            //value = {this.props.movieFromList ? this.props.movie.year : ''}
                            value = {this.props.movie.year}
                            onChange = {this.onChange}
                        />
                </div>
            )
    }

    getId(inputFieldId){
        return (this.props.movie.id ?
                inputFieldId + this.props.formType + this.props.movie.id :
                inputFieldId + this.props.formType)
    }

    allFieldsComplete(){
        if(
            document.getElementById(this.getId("name")).value &&
            document.getElementById(this.getId("duration")).value &&
            document.getElementById(this.getId("year")).value)
            return true;
        return false;
    }

    onChange(){
        const movie = new Movie(
            document.getElementById(this.getId("name")).value,
            document.getElementById(this.getId("duration")).value,
            document.getElementById(this.getId("year")).value,
            this.props.movie.id
        )
        const disabledCreateButton = !this.allFieldsComplete();
        
        this.props.handleOnChangeInput(movie, disabledCreateButton);
    }
    

}


const mapStateToProps = state => {
    return {
      movie: state.movie
    };
  }
  
const mapDispatchToProps = dispatch => {
    return{
      handleOnChangeInput(movie, disabledCreateButton){
          const action = {
              type: "CHANGE_INPUT",
              movie,
              disabledCreateButton
          }
          dispatch(action);
      },
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(FormMovie);