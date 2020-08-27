import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SongsComponent from './component/SongsComponent.jsx';
import LoginComponent from './component/LoginComponent.jsx'

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/songs" component={SongsComponent}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
