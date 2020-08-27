import React, {Component} from "react";


class LoginComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            userName: ' ',
            password: ' '
        }
    }

    render(){
        return (
            <div>
                User Name: <input type="text" name="username"/>
                Password: <input type="password" name="password"/>
                <button onClick={this.handleLoginClick}>Login</button>
            </div>
        )
    }

    handleLoginClick(){
        console.log("login clicked")
    }
}

export default LoginComponent;