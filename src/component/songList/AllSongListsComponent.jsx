import React, {Component} from "react";
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/allSongList-style.css"
import addIcon from "../../images/add.svg";
import "../../css/buttons.css"
import PlaylistCard from "./PlaylistCard";


export class AllSongListsComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            songLists: []
        };

        this.refreshPlaylists = this.refreshPlaylists.bind(this);
        this.deleteSongListClicked = this.deleteSongListClicked.bind(this);
    }

    render() {
        return (
            <main className="content-wrapper">
                <section className="playlist-top">
                    <h1>Top playlists</h1>
                    <button className="round-add-btn">
                        <img src={addIcon} alt="plus icon"/>
                    </button>
                </section>
                {this.state.message && <div>{this.state.message}</div>}
                <section className="playlist-line">
                    {this.state.songLists.map(songList =>
                        <PlaylistCard
                            key={songList.id}
                            songList={songList}
                            onDelete={(songListId) => this.deleteSongListClicked(songListId)}
                        />)
                    }
                </section>
            </main>
        )
    }

    componentDidMount() {
        this.refreshPlaylists();
    }

    refreshPlaylists() {
        let token = StorageSessionService.getToken();
        let userId = StorageSessionService.getUserId();

        SongListService.retrieveAllSongLists(token, userId)
            .then(response => {
                this.setState({
                    songLists: response.data
                })
            });
    }

    deleteSongListClicked(songListId) {
        const token = StorageSessionService.getToken();
        SongListService.deleteSongList(token, songListId)
            .then(response => {
                this.setState({
                    songLists: this.state.songLists.filter(songList => songList.id !== songListId)
                });
            });
    }

}