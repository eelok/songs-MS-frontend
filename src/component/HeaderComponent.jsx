import React,{Component} from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import AuthenticationService from "../service/AuthenticationService";

class HeaderComponent extends Component{

    render() {
        const userIsLoggedIn = AuthenticationService.getToken();
        console.log(userIsLoggedIn)

        return(
            <div>
                <nav>
                    <ul>
                        {userIsLoggedIn && <li><Link to={"/songs"}>Songs</Link></li>}
                        {!userIsLoggedIn && <li><Link to={"/login"}>Login</Link></li>}
                        {userIsLoggedIn && <li><Link to={"/login"}
                                                onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        )
    }
}

export const HeaderComponentWR = withRouter(HeaderComponent);