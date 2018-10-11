import React from 'react';
import './CustomInput.css';


export default class CustomInput extends React.Component {
    /*
    constructor(props) {
        super(props);
        
      }
*/
    render(){
        return <input 
                    className = {this.props.className}
                    placeholder = {this.props.placeholder}
                    type = {this.props.type}
                    id = {this.props.id}
                    onChange = {this.props.onChange}
                ></input>;
    }

   

}