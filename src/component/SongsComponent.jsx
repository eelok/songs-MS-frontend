import React, {Component} from 'react';
import SongsService from "../service/SongsService";
import StorageSessionService from "../service/StorageSessionService";
import "../css/all-songs-style.css";
import addIcon from "../images/add.svg";


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
                <section className="songs-top">
                    <h1>Top 10: All music genre</h1>
                    <button className="song-add-btn" onClick={this.addSongClicked}>
                        <img src={addIcon} alt=""/>
                    </button>
                </section>
                {this.state.message && <div>{this.state.message}</div>}
                {this.state.songs.map(
                    song =>
                        <div key={song.id} className="song-row">

                            <div className="song-details">
                                <div className="song-details__item song-title">
                                    {song.title}
                                </div>
                                <div className="song-details__item song-artist">
                                    {song.artist}
                                </div>
                                <div className="song-details__item song-label">
                                    {song.label}
                                </div>
                                <div className="song-details__item song-released">
                                    {song.released}
                                </div>
                            </div>
                            <div className="song-control">
                                <button className="song-btn edit" onClick={() => this.updateSongClicked(song.id)}>Edit
                                </button>
                                <button className="song-btn delete" onClick={() => this.deleteSongClicked(song.id)}>Delete
                                </button>
                                <button className="song-btn edit" >Add to Playlist</button>
                            </div>
                        </div>
                )}
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

