import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import "../../css/buttons.css"


export class DropdownSongsSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            ownerId: StorageSessionService.getUserId(),
            isPrivate: false,
            selectedSongId: ''
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="songs-selector">Songs</label>
                <select
                    name="songs-selector"
                    id="songs-selector"
                    onChange={(e) => {
                        this.setState({...this.state, selectedSongId: e.target.value});
                    }}
                >
                    {this.props.listOfSongs.map(
                        song =>
                            <option key={song.id} value={song.id}>
                                {song.title}, {song.artist}, {song.label}, {song.released}
                            </option>
                    )}
                </select>
                <button
                    onClick={(e) => {
                        this.props.onSongAdded(this.getSong(this.state.selectedSongId));
                        e.preventDefault();
                    }}
                >
                    Add Song
                </button>
            </div>
        )
    }

    getSong = (songId) => {
        return this.props.listOfSongs.find(
            (song) => song.id === parseInt(songId, 10)
        );
    }

}