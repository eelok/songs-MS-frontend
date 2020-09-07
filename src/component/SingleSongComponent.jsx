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
            released: '',
            imageUrl: '',
        }

        this.handleSaveClicked = this.handleSaveClicked.bind(this)
    }

    render() {

        return (
            <div className="single-song-container">
                <h1>Song</h1>
                <form onSubmit={this.handleSaveClicked} className="single-song-box">
                    <div className="single-song-item">
                        <label>Title:</label>
                        <input type="text" name="title" defaultValue={this.state.title} required/>
                    </div>
                    <div className="single-song-item">
                        <label>Artist:</label>
                        <input type="text" name="artist" defaultValue={this.state.artist} required/>
                    </div>
                    <div className="single-song-item">
                        <label>Label:</label>
                        <input type="text" name="label" defaultValue={this.state.label} required/>
                    </div>
                    <div className="single-song-item">
                        <label>Released:</label>
                        <input type="number" name="released" defaultValue={this.state.released} required/>
                    </div>
                    <div className="single-song-item">
                        <label>Image:</label>
                        <input type="text" name="imageUrl" defaultValue={this.state.imageUrl} required/>
                    </div>
                    <div className="single-song-item">
                        <button className="single-song-btn" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }

    handleSaveClicked(event) {
        let formData = new FormData(event.target);
        let song = Object.fromEntries(formData);
        console.log(song)
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
                console.log(response.data)
                    this.setState({
                        title: response.data.title,
                        artist: response.data.artist,
                        label: response.data.label,
                        released: response.data.released,
                        imageUrl: response.data.imageUrl,
                    })
                }
            )
    }
}

export default SingleSongComponent;