import React, {Component} from 'react';
import SongsService from "../service/SongsService";
import StorageSessionService from "../service/StorageSessionService";
import "../css/all-songs-style.css"


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
        if (!isUserLoggedIn) {
            this.props.history.push(`/login`)
        }
        return (
            <section className="songs-container">
                <h1>Top 10: All music genre</h1>
                {this.state.message && <div>{this.state.message}</div>}
                {this.state.songs.map(
                    song =>
                        <div key={song.id} className="song-row">
                            <div className="song-details song-title">
                                {song.title}
                            </div>
                            <div className="song-details song-artist">
                                {song.artist}
                            </div>
                            <div className="song-details song-label">
                                {song.label}
                            </div>
                            <div className="song-details song-released">
                                {song.released}
                            </div>
                            <div className="song-control">
                                <button className="song-btn" onClick={() => this.updateSongClicked(song.id)}>Edit
                                </button>
                                <button className="song-btn" onClick={() => this.deleteSongClicked(song.id)}>Delete
                                </button>
                            </div>
                        </div>
                )}
                {/*</div>*/}


                <div>
                    <button onClick={this.addSongClicked}>Add</button>
                </div>
            </section>


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

    addSongClicked() {
        this.props.history.push(`/songs/-1`)
    }
}

export default SongsComponent;

