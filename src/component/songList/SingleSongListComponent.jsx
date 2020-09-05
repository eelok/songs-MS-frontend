import React, {Component} from "react";
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/singleSongList-style.css";

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
            <article className="songlist-container">
                <section className="songlist-content singlist-info">
                    <div>
                        <span>name:</span>{this.state.songList.name}
                    </div>
                    <div>
                        <span>owner:</span>{this.state.songList.ownerId}
                    </div>
                </section>
                <section className="songlist-content singlist-songs">
                    <div>
                        {this.state.songList.songs.map(song =>
                            <li key={song.id}> {song.title}, {song.artist}, {song.label}, {song.released}</li>
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