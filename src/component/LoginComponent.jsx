import React, {Component} from "react";
import AuthenticationService from "../service/AuthenticationService";


class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            password: ''
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLoginClick}>
                    User Name: <input type="text" name="userId"/>
                    Password: <input type="password" name="password"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }

    handleLoginClick(event) {
        let userInput = new FormData(event.target);
        let userData = Object.fromEntries(userInput);
        event.preventDefault();

        AuthenticationService.allocateTokenToUser(userData)
            .then((response) => {
                const token = response.data;
                sessionStorage.setItem("userToken", token)
                this.props.history.push(`/songs`)
            })


    }
}

export default LoginComponent;