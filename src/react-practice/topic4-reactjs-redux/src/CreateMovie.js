import React from 'react';
import './CreateMovie.css';
import CustomButton from './CustomButton';
import FormMovie from './FormMovie'

//Redux
import { connect } from 'react-redux';

export class CreateMovie extends React.Component {

    render(){
        if (this.props.showCreateForm){
            return (
                <div className="createMovie">
                    <header>Create New</header>
                    <section>
                        <FormMovie
                            id = "createForm"
                            formType = "Create"
                        />
                        <CustomButton 
                            className = "button-large create"
                            content = "Create"
                            onClick = {this.props.handleSaveClick}
                            disabled = {this.props.disabledCreateButton}
                        /> 
                    </section>
                </div>
            )
        }else{
            return null
        }
    }
}


const mapStateToProps = state => {
    return {
        disabledCreateButton: state.disabledCreateButton,
        showCreateForm: state.showCreateForm
    };
}
  
const mapDispatchToProps = dispatch => {
    return{
        handleSaveClick(){
            const action = {
                type: "ADD_MOVIE",
            }
            dispatch(action);
        },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);
