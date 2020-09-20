import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import {DropdownSongsSelector} from "./DropdownSongsSelector";
import SongsService from "../../service/SongsService";
import {Radio} from "./Radio";
import SongListService from "../../service/SongListService";
import {TextInput} from "../TextInput";

import "../../css/addPlaylist-style.css";
import "../../css/buttons.css";
import {FormAddPlayList} from "./form-add-playlist.component";


export class AddNewPlayListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ownerId: StorageSessionService.getUserId(),
            listOfSongs: [],
            addedSongs: []
        }
    }

    render() {
        return (
            <div className="content-wrapper-light">
                <form onSubmit={this.handleSaveClicked} className="form">
                    <h1>Your New Playlist</h1>
                    <TextInput label={"Title:"} name={"name"} />
                    <TextInput label={"Link to image:"} name={"imgUrl"} />
                    <Radio isPrivate={true} />
                    <DropdownSongsSelector
                        listOfSongs={this.state.listOfSongs}
                        onSongAdded={(song) => {
                            let addedSongs = this.state.addedSongs;
                            addedSongs.push(song);
                            this.setState({
                                ...this.state,
                                addedSongs: addedSongs
                            });
                            //удалить песню, которая была добавлена в addedSongs из listOfSongs
                            //с помощью  фильтр
                           this.setState({
                               ...this.state,
                               listOfSongs: this.state.listOfSongs.filter(s => s.id !== song.id)
                           })
                        }}
                    />
                    <ul className="form-control added-content">
                        <span>Selected songs:</span>
                        {this.state.addedSongs.map(song =>
                            <li key={song.id}>{song.title} {song.artist} {song.label} {song.released}</li>
                        )}
                    </ul>
                    <div className="form-control button-item">
                        <button className="save-btn" type="submit">Save</button>
                    </div>
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

    handleSaveClicked = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let songList = Object.fromEntries(formData);
        songList = {...songList, ownerId: this.state.ownerId, songs: this.state.addedSongs};
        console.log(songList);
        const token = StorageSessionService.getToken();
        SongListService.createNewSongList(token, songList)
            .then(() => {
                this.props.history.push('/songslists')

            });
    }

}