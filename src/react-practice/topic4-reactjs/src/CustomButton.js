import React from 'react';
import './CustomButton.css';


export default class CustomButton extends React.Component {

    render(){
        return <button 
                    className = {this.props.className}
                    onClick={this.props.onClick}
                >
                    {this.props.content}
                </button>;
    }

}