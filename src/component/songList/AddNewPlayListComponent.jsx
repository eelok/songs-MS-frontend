import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import "../../css/buttons.css"
import {DropdownSongsSelector} from "./DropdownSongsSelector";
import SongsService from "../../service/SongsService";


export class AddNewPlayListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            ownerId: StorageSessionService.getUserId(),
            isPrivate: false,
            listOfSongs: [],
            addedSongs: []
        }
    }

    render() {
        return (
            <div>
                <form action="">
                    <h1>Your new Playlist</h1>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title"/>
                    </div>
                    <div>
                        <h4>Visibility</h4>
                        <label htmlFor="public">Public</label>
                        <input type="checkbox" name="public" id="public"/>
                        <label htmlFor="private">Private</label>
                        <input type="checkbox" name="private" id="private"/>
                    </div>
                    <ul>
                        {this.state.addedSongs.map(song =>
                            <li key={song.id}>{song.title}</li>
                        )}
                    </ul>
                    <DropdownSongsSelector
                        listOfSongs={this.state.listOfSongs}
                        onSongAdded={(song) => {
                            let addedSongs = this.state.addedSongs;
                            addedSongs.push(song);
                            this.setState({
                                ...this.state,
                                addedSongs: addedSongs
                            })
                        }}
                    />
                    <button className="save-btn">Save</button>

                </form>
            </div>
        )
    }

    componentDidMount() {
        let token = StorageSessionService.getToken();
        SongsService.retrieveAllSongs(token)
            .then((response) => {
                this.setState({...this.state, listOfSongs: response.data});
            })


    }

}