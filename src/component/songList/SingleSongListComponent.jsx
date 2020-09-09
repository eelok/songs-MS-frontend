import React, {Component} from "react";
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/singleSongList-style.css";
import "../../css/all-songs-style.css"

export class SinglePlayListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //todo это наверное не совсем верно
            playListId: this.props.match.params.id,
            songList: {
                songs: []
            }
        }

        this.getSinglePlayList = this.getSinglePlayList.bind(this);
    }

    render() {
        return (
            <article className="playlist-container">
                <section className="playlist-details">
                    <div className="playlist-details-item name">
                        <p>Playlist title:</p>
                        <h4>{this.state.songList.name}</h4>
                    </div>
                    <div className="playlist-details-item private">
                        <p>private:</p>{this.state.songList.isPrivate}
                    </div>
                    <div className="playlist-details-item owner">
                        <div
                            className="owner-name-icon">{this.state.songList.ownerId && this.state.songList.ownerId[0]}</div>
                        {this.state.songList.ownerId}
                    </div>
                </section>
                <section className="playlist-all-songs">
                    <div>
                        {this.state.songList.songs.map(song =>
                            <div key={song.id} className="song-row">
                                <div className="song-details">
                                    <img className="song-details__item song-img" src={song.imageUrl} alt="songs cover"/>
                                    <div className="song-details__item song-title">{song.title}</div>
                                    <div className="song-details__item song-artist">{song.artist}</div>
                                    <div className="song-details__item song-label">{song.label}</div>
                                    <div className="song-details__item song-released">{song.released}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </article>
        );
    }

    componentDidMount() {
        this.getSinglePlayList()
    }

    getSinglePlayList() {
        let token = StorageSessionService.getToken();
        SongListService.retrieveSingleSongList(token, this.state.playListId)
            .then((response) => {
                this.setState({
                    songList: response.data
                });
            });
    }
}