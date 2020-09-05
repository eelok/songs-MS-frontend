import React, {Component} from "react";
import SongsService from "../service/SongsService";
import StorageSessionService from "../service/StorageSessionService";
import "../css/SingleSong-style.css"


class SingleSongComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            artist: '',
            label: '',
            released: ''
        }

        this.handleSaveClicked = this.handleSaveClicked.bind(this)
    }

    render() {

        return (
            <div className="single-song-container">
                <h1>Song</h1>
                <form onSubmit={this.handleSaveClicked} className="single-song-box">
                    <div className="single-song-item">
                        <h4>Title:</h4>
                        <input type="text" name="title" defaultValue={this.state.title} required/>
                    </div>
                    <div className="single-song-item">
                        <h4>Artist:</h4>
                        <input type="text" name="artist" defaultValue={this.state.artist} required/>
                    </div>
                    <div className="single-song-item">
                        <h4>Label:</h4>
                        <input type="text" name="label" defaultValue={this.state.label} required/>
                    </div>
                    <div className="single-song-item">
                        <h4>Released:</h4>
                        <input type="number" name="released" defaultValue={this.state.released} required/>
                    </div>
                    <div className="single-song-item">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }

    handleSaveClicked(event) {
        let formData = new FormData(event.target);
        let song = Object.fromEntries(formData);
        event.preventDefault();

        const token = StorageSessionService.getToken();
        if (parseInt(this.state.id) === -1) {
            SongsService.createSong(token, song)
                .then(() => {
                    this.props.history.push('/songs')
                })
        } else {
            song.id = this.state.id
            SongsService.updateSong(token, this.state.id, song)
                .then(() => {
                    this.props.history.push('/songs')
                });
        }

    }

    componentDidMount() {
        let token = StorageSessionService.getToken();
        if (parseInt(this.state.id) === -1) {
            return;
        }
        SongsService.retrieveSingleSong(token, this.state.id)
            .then(response => {
                    this.setState({
                        title: response.data.title,
                        artist: response.data.artist,
                        label: response.data.label,
                        released: response.data.released
                    })
                }
            )
    }
}

export default SingleSongComponent;