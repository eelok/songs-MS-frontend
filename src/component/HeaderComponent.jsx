import React,{Component} from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import StorageSessionService from "../service/StorageSessionService";
import '../css/header-style.css';

class HeaderComponent extends Component{

    render() {
        const userIsLoggedIn = StorageSessionService.getToken();

        return(
            <header>
                <div className="navbar">
                    <h1 className="logo">
                        Cool Logo
                    </h1>
                    <nav className="tabs">
                        <ul>
                            {userIsLoggedIn && <li><Link to={"/songs"}>Songs</Link></li>}
                            {userIsLoggedIn && <li><Link to={"/songslists"}>Playlists</Link></li>}
                            {!userIsLoggedIn && <li><Link to={"/login"}>Login</Link></li>}
                            {userIsLoggedIn && <li><Link to={"/login"}
                                                    onClick={StorageSessionService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export const HeaderComponentWR = withRouter(HeaderComponent);