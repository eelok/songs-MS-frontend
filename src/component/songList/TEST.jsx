import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import SongsService from "../../service/SongsService";

//todo delete
export class Test extends Component{
    constructor(props) {
        super(props);

        this.state = {
            listOfSongs: [],
            addedSongs: [],
            selectedSongId: '',
        }

        this.getSongs = this.getSongs.bind(this)
    }
    render() {
        return(
            <div>
                <h1>Test</h1>
                <ul>
                    {this.state.addedSongs.map(
                        song =>
                            <li key={song.id}> {song.title} {song.artist}</li>
                    )

                    }
                </ul>
                <select
                    onChange={(e) => {
                        this.setState({
                            ...this.state, selectedSongId: e.target.value
                        })
                    }}


                >
                {this.state.listOfSongs.map(
                        song =>
                            <option key={song.id} value={song.id}>
                                {song.title} {song.artist} {song.released}
                            </option>
                )}
                </select>
                <button
                    onClick={() => {
                        this.setState({
                            ...this.state, addedSongs: this.state.selectedSongId
                        });
                    }}
                >
                    add
                </button>
            </div>
        )
    }

    componentDidMount() {
        this.getSongs()
    }

    getSongs(){
        let token = StorageSessionService.getToken();

        SongsService.retrieveAllSongs(token)
            .then(response => {
                this.setState({
                    listOfSongs: response.data
                });
            })
    }

}