import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import "../../css/buttons.css"
import {DropdownSongsSelector} from "./DropdownSongsSelector";
import SongsService from "../../service/SongsService";
import {RadioPrivatePublic} from "./RadioPrivatePublic";
import SongListService from "../../service/SongListService";


export class AddNewPlayListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            ownerId: StorageSessionService.getUserId(),
            isPrivate: true,
            listOfSongs: [],
            addedSongs: []
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSaveClicked}>
                    <h1>Your new Playlist</h1>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title"/>
                    </div>
                    <RadioPrivatePublic
                        isPrivate={this.state.isPrivate}
                    />
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
                            });
                            //удалить писню, которая была добавлена в addedSongs из listOfSongs
                            //с помощью  фильтр
                           this.setState({
                               ...this.state,
                               listOfSongs: this.state.listOfSongs.filter(s => s.id !== song.id)
                           })

                        }}
                    />
                    <button className="save-btn" type="submit">Save</button>
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