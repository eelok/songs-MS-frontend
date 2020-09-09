import React, {Component} from "react";
import {Link} from 'react-router-dom';
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/allSongList-style.css"
import "../../css/buttons.css"

class PlaylistCard extends Component {


    constructor(props) {
        super(props);

        this.state = {
            loggedInUserId: StorageSessionService.getUserId(),
            message: null,
        };
    }

    render() {
        return (
            <div className="playlist-card">
                <img src={this.props.songList.imgUrl} alt="cool cover" className="playlist-card__item card-image"/>
                <div className="playlist-card__item">
                    <span>Name: </span>
                    {this.props.songList.name}
                </div>

                <div className="playlist-card__item">
                    <span>Owner: </span>
                    {this.props.songList.ownerId}
                </div>

                <div className="playlist-card__item">
                    {this.props.songList.isPrivate && <span>Private</span>}
                    {!this.props.songList.isPrivate && <span>Public</span>}
                </div>

                    <div className="playlist-card__item playlist-control">
                        <Link className="details-link" to={`/songslists/${this.props.songList.id}`}>
                            Show Details</Link>
                        {(this.state.loggedInUserId === this.props.songList.ownerId) &&
                        <div>
                            <button className="basic-btn edit">Edit</button>
                            <button className="basic-btn delete" onClick={() => this.props.onDelete(this.props.songList.id)}>
                                Delete
                            </button>
                        </div>
                        }
                    </div>

            </div>

        )
    }

}

export default PlaylistCard;