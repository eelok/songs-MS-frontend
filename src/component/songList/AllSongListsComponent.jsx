import React, {Component} from "react";
import {Link} from "react-router-dom";
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";
import {PlayListCardList} from "./playlist-card-list.component";

import addIcon from "../../images/add.svg";
import "../../css/allSongList-style.css"
import "../../css/buttons.css"



export class AllSongListsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            songLists: []
        };

    }

    render() {
        return (
            <main className="content-wrapper">
                <section className="playlist-top">
                    <h1>Top playlists</h1>
                    <Link className="round-add-btn" to={`/addsongslists/`}>
                        <img src={addIcon} alt="plus icon"/>
                    </Link>
                </section>
                {this.state.message && <div>{this.state.message}</div>}
                <PlayListCardList
                    songLists={this.state.songLists}
                    onDelete={(songListId) => this.deleteSongListClicked(songListId)}
                />
            </main>
        )
    }

    componentDidMount() {
        this.refreshPlaylists();
    }

    refreshPlaylists = () => {
        let token = StorageSessionService.getToken();
        let userId = StorageSessionService.getUserId();

        SongListService.retrieveAllSongLists(token, userId)
            .then(response => {
                this.setState({
                    songLists: response.data
                })
            });
    }

    deleteSongListClicked = (songListId) => {
        const token = StorageSessionService.getToken();
        SongListService.deleteSongList(token, songListId)
            .then(response => {
                this.setState({
                    songLists: this.state.songLists.filter(songList => songList.id !== songListId)
                });
            });
    }
}