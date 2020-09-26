import React, {Component} from 'react';
import SongsService from "../../service/SongsService";
import StorageSessionService from "../../service/StorageSessionService";
import addIcon from "../../images/add.svg";
import {SongRowList} from "./song-row-list.component.jsx";

import "../../css/all-songs-style.css";
import "../../css/buttons.css"


class SongsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: []
        }
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
                    <button className="round-add-btn"
                            onClick={this.addSongClicked}
                    >
                        <img src={addIcon} alt="plus icon"/>
                    </button>
                </section>
                <SongRowList
                    songs={this.state.songs}
                    onEdit={(songId) => this.editSongClicked(songId)}
                    onDelete={(songId) => this.deleteSongClicked(songId)}
                />
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

    deleteSongClicked = (id) => {
        let token = StorageSessionService.getToken();
        SongsService.deleteSong(token, id)
            .then(response => {
                this.refreshSongs()
            });
    }

    editSongClicked = (id) => {
        this.props.history.push(`/songs/${id}`)
    }

    addSongClicked = () => {
        this.props.history.push(`/songs/-1`)
    }
}

export default SongsComponent;

