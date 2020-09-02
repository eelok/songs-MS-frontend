import React, {Component} from "react";
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";


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
            <div>
                <div>
                    <span>name: </span>
                    <div>{this.state.songList.name}</div>
                    <span>owner: </span>
                    <div>{this.state.songList.ownerId}</div>
                    //todo не могу отобразить
                    {/*<span>public: </span>*/}
                    {/*<div>{this.state.songList.isPrivate.toString()}</div>*/}
                    <div>
                        {this.state.songList.songs.map(song =>
                            <li key={song.id}> {song.title}, {song.artist}, {song.label}, {song.released}</li>
                        )}
                    </div>
                </div>
            </div>
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