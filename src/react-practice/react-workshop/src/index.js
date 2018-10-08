import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Click Me!",
        };
      }


    render(){
        return <button 
                    className = {this.props.className}
                    onClick={this.props.onClick}
                >
                {this.state.text}
                </button>;
    }

}

class CustomInput extends React.Component {
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
                ></input>;
    }

   

}


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
        };
      }

      componentDidMount(){
        this.setState({
            mounted : true,
        });
    }


    render(){
        
        //if(this.state.mounted)
            //alert("Login mounted")
        return (
            <div className="login">
                <header> Simple Login</header>
                <section>
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Email"
                        type = "text"
                    />
                    <CustomInput 
                        className = "customInput"
                        placeholder = "Password"
                        type = "password"
                    />
                    <CustomButton 
                        className = "customButton"
                        size = {2200}
                        onClick={() => alert('Button Clicked')}
                    />    
                </section>
                <footer>
                    <a href="forgotPass">Forgot Password?</a>
                </footer>
            </div>
        )
    }

}















ReactDOM.render(<Login />, document.getElementById('root'));
