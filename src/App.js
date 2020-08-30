import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SongsComponent from './component/SongsComponent.jsx';
import LoginComponent from './component/LoginComponent.jsx';
import SingleSongComponent from './component/SinglSongComponent.jsx';
import {HeaderComponentWR} from "./component/HeaderComponent";
import {ErrorComponent} from "./component/AnErrorComponent";

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponentWR/>
                <Switch>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/songs/:id" component={SingleSongComponent}/>
                    <Route path="/songs" component={SongsComponent}/>
                    <Route component={ErrorComponent}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
