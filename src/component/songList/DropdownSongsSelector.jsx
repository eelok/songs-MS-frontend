import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import "../../css/buttons.css";
import "../../css/drop-down-song-selector.css"


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
            <div className="form-control drop-down-box">
                <div className="drop-down-header">
                    <p>Сhoose Songs:</p>
                </div>
                <div className="drop-down-content">
                    <label>
                        <select
                            className="select"
                            onChange={(e) => {
                                console.log('selected value', e.target.value);
                                if (!e.target.value) {
                                    return;
                                }
                                this.setState({...this.state, selectedSongId: e.target.value});
                            }}
                        >
                            <option value="">Choose a song ...</option>
                            {this.props.listOfSongs.map(
                                song =>
                                    <option key={song.id} value={song.id}>
                                        {song.title}, {song.artist}, {song.label}, {song.released}
                                    </option>
                            )}
                        </select>
                    </label>
                    <button className="basic-btn add-song-playlist"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!this.state.selectedSongId) {
                                    return;
                                }
                                this.props.onSongAdded(this.getSong(this.state.selectedSongId));
                            }}
                    >
                        Add Song
                    </button>
                </div>
            </div>
        )
    }

    getSong = (songId) => {
        return this.props.listOfSongs.find(
            (song) => song.id === parseInt(songId, 10)
        );
    }

}