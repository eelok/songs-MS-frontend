import React from 'react';
import SongsComponent from "./component/SongsComponent";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/songs" component={SongsComponent}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
