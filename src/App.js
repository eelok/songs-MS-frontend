import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SongsComponent from './component/songs/SongsComponent.jsx';
import LoginComponent from './component/LoginComponent.jsx';
import SingleSongComponent from './component/songs/SingleSongComponent.jsx';
import {HeaderComponentWR} from "./component/HeaderComponent";
import {ErrorComponent} from "./component/AnErrorComponent";
import {AllSongListsComponent} from "./component/songList/AllSongListsComponent";
import {SinglePlayListComponent} from "./component/songList/SingleSongListComponent";

import './App.css';
import {AddNewPlayListComponent} from "./component/songList/AddNewPlayListComponent";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponentWR/>
                <Switch>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/songs/:id" component={SingleSongComponent}/>
                    <Route path="/songs" component={SongsComponent}/>
                    <Route path="/songslists/:id" component={SinglePlayListComponent}/>
                    <Route path="/songslists" component={AllSongListsComponent}/>
                    <Route path="/addsongslists" component={AddNewPlayListComponent}/>
                    {/*<Route component={ErrorComponent}/>*/}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
