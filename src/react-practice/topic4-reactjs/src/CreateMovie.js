import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import Movie from './Movie';
import './CreateMovie.css';


export default class CreateMovie extends React.Component {

    
      /*
    constructor(props) {
        super(props);
    
    }

      componentDidMount(){
        this.setState({
            nombre : "true",
        });
    }
*/

    render(){
        return (
            <div className="createMovie">
                <header>Create Movie</header>
                <section>
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Name"
                        id = "name"
                        type = "text"
                    />
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Duration"
                        id = "duration"
                        type = "text"
                    />
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Year"
                        id = "year"
                        type = "text"
                    />
                    <CustomButton 
                        className = "customButton"
                        content = "Create Movie"
                        onClick = {this.saveMovie}
                    /> 
                </section>
        
                
            </div>
        )
    }


    saveMovie(){
        let movie = new Movie(
            document.getElementById("name").value,
            document.getElementById("duration").value,
            document.getElementById("year").value
        );
        alert(movie.show())
    }
}

