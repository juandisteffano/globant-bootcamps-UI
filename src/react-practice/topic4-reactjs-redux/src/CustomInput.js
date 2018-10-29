import React from 'react';
import './CustomInput.css';

export default class CustomInput extends React.Component {

    render(){
        return <input 
                    className = {this.props.className}
                    placeholder = {this.props.placeholder}
                    type = {this.props.type}
                    id = {this.props.id}
                    onChange = {this.props.onChange}
                    value = {this.props.value}
                ></input>;
    }
}
