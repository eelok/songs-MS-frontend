import React, {Component} from "react";
import {Link} from 'react-router-dom';
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/allSongList-style.css"

export class AllSongListsComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            songLists: []
        }

    }

    render() {
        return (
            <main className="content-wrapper">
                <h1>Top playlists</h1>
                <section className="playlist-line">
                    {this.state.songLists.map(
                        songList =>
                            <div key={songList.id} className="playlist-card">
                                <img src={songList.imgUrl} alt="image" className="playlist-card__item card-image"/>
                                <div className="playlist-card__item">
                                    <span>Name: </span>
                                    {songList.name}
                                </div>

                                <div className="playlist-card__item">
                                    <span>Owner: </span>
                                    {songList.ownerId}
                                </div>

                                <div className="playlist-card__item">
                                    <span>Public: </span>
                                    {songList.isPrivate.toString()}
                                </div>

                                <div className="playlist-card__item">
                                    <Link to={`/songslists/${songList.id}`}>go to songs</Link>
                                </div>
                            </div>
                    )}
                </section>
            </main>
        )
    }

    componentDidMount() {
        let token = StorageSessionService.getToken();
        let userId = StorageSessionService.getUserId();

        SongListService.retrieveAllSongLists(token, userId)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    songLists: response.data
                })
            })
    }

    // showContentClicked(id){
    //     this.props.history.push(`/songslists/${id}`)
    // }
}