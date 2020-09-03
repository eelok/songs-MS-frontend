import React, {Component} from "react";
import AuthenticationService from "../service/AuthenticationService";
import "../css/loginPage-style.css"


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
            <div className="wrapper">
                <div className="box">
                    <h3>Welcome</h3>
                    <form className="login-form" onSubmit={this.handleLoginClick}>
                        <input type="text" name="userId" placeholder="user name"/>
                        <input type="password" name="password" placeholder="password"/>
                        <button className="btn-login">LOGIN</button>
                    </form>
                </div>
            </div>
        )
    }

    async handleLoginClick(event) {
        let userInput = new FormData(event.target);
        let userData = Object.fromEntries(userInput);
        event.preventDefault();

        const tokenResponse = await AuthenticationService.authenticate(userData);
        const token = tokenResponse.data;
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userId", userData.userId);
        this.props.history.push("/songs");
    }
}

export default LoginComponent;