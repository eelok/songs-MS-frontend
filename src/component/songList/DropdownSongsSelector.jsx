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
                        <select className="select"
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
                    </label>
                    <button className="edit basic-btn"
                            onClick={(e) => {
                                this.props.onSongAdded(this.getSong(this.state.selectedSongId));
                                e.preventDefault();
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