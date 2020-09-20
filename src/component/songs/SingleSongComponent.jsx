import React, {Component} from "react";
import SongsService from "../../service/SongsService";
import StorageSessionService from "../../service/StorageSessionService";
import "../../css/SingleSong-style.css";
import "../../css/buttons.css"
import {SongForm} from "./song-form.component";


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

    }

    render() {

        return (
            <div className="single-song-container">
                <h1>Song</h1>
                <SongForm onFormSubmit={this.handleSaveClicked}
                          title={this.state.title}
                          artist={this.state.artist}
                          label={this.state.label}
                          released={this.state.released}
                          imageUrl={this.state.imageUrl}
                          onChangeImageUrl={this.handleOnChangeImageUrl}
                />
            </div>
        )
    }
    handleOnChangeImageUrl = (e) =>{
        this.setState({
            imageUrl: e.target.value
        })
    }
    handleSaveClicked =(event) => {
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