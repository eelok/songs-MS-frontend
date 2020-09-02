import React, {Component} from 'react';
import SongsService from "../service/SongsService";
import StorageSessionService from "../service/StorageSessionService";


class SongsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: [],
            message: null
        }

        this.deleteSongClicked = this.deleteSongClicked.bind(this);
        this.updateSongClicked = this.updateSongClicked.bind(this);
        this.addSongClicked = this.addSongClicked.bind(this);
    }

    render() {
        const isUserLoggedIn = StorageSessionService.getToken();
        if(!isUserLoggedIn){
            this.props.history.push(`/login`)
        }
        return (
            <div>
                <h1>List of Songs</h1>
                {this.state.message && <div>{this.state.message}</div>}
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Label</th>
                        <th>Released</th>
                        <th>Update</th>
                        <td>Delete</td>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.songs.map(
                        song =>
                            <tr key={song.id}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.label}</td>
                                <td>{song.released}</td>
                                <td>
                                    <button onClick={() => this.updateSongClicked(song.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => this.deleteSongClicked(song.id)}>Delete</button>
                                </td>
                            </tr>
                    )}
                    </tbody>
                </table>

                <div>
                    <button onClick={this.addSongClicked}>Add</button>
                </div>
            </div>


        )
    }

    componentDidMount() {
        this.refreshSongs();
    }

    refreshSongs() {
        const token = StorageSessionService.getToken();
        SongsService.retrieveAllSongs(token)
            .then(response => {
                this.setState({
                    songs: response.data
                })
            })
    }

    deleteSongClicked(id) {
        let token = StorageSessionService.getToken();
        SongsService.deleteSong(token, id)
            .then(response => {
                this.setState({
                    message: `song ${id} was deleted`,

                })
                this.refreshSongs()
            })
    }

    updateSongClicked(id) {
        this.props.history.push(`/songs/${id}`)
    }

    addSongClicked(){
        this.props.history.push(`/songs/-1`)
    }
}

export default SongsComponent;

