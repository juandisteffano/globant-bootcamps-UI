import React from 'react';
import './EditMovie.css';
import CustomButton from './CustomButton';
import FormMovie from './FormMovie';

//Redux
import { connect } from 'react-redux';

export class EditMovie extends React.Component {

    render(){
        if (this.props.showEditForm[this.props.movieFromList.id-1]){
            return (
                <div className="editMovie">
                        <FormMovie
                            movieFromList = {this.props.movieFromList}
                            id = "editForm"
                            formType = "Edit"
                        />
                        <footer>
                            <CustomButton 
                                className = "button-medium save"
                                content = "Save"
                                onClick = {() => this.props.handleSaveEditClick(this.props.movieFromList)}
                                disabled = {this.props.disabledSaveButton}
                            /> 
                            <CustomButton 
                                className = "button-medium cancel"
                                content = "Cancel"
                                onClick = {() => this.props.handleCancelClick(this.props.movieFromList)}
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
                    onClick =  {() => this.props.handleEditClick(this.props.movieFromList)}
                    disabled = {false}
                />
            )
        }
    }


    componentDidUpdate(){
        Array.from(document.getElementsByClassName("editMovie")).map((value) => {
            if(!value.className.includes("efect"))
                value.className += " efect"
            return 0;
        })
    }
}

const mapStateToProps = state => {
    return {
        showEditForm: state.showEditForm,
        disabledSaveButton: state.disabledSaveButton,
        movie: state.movie,
    };
}
  
const mapDispatchToProps = dispatch => {
    return{
        handleEditClick(movieFL){
            const action = {
                type: "EDIT_MOVIE",
                movieFL: movieFL,
            }
            dispatch(action);
        },
        handleCancelClick(movieFL){
            const action = {
                type: "EDIT_MOVIE_CANCEL",
                movieFL: movieFL,
            }
            dispatch(action);
        },
        handleSaveEditClick(movieFL){
            const action = {
                type: "EDIT_MOVIE_SAVE",
                movieFL: movieFL,
            }
            dispatch(action);
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
