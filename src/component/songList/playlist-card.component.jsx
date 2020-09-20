import React from "react";
import {Link} from 'react-router-dom';
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/allSongList-style.css"
import "../../css/buttons.css"

export const PlaylistCard = (props) => {
    let loggedInUserId = StorageSessionService.getUserId();

    return (
        <div className="playlist-card">
            <img src={props.songList.imgUrl} alt="cool cover" className="playlist-card__item card-image"/>
            <div className="playlist-card__item">
                <span>Name: </span>
                {props.songList.name}
            </div>

            <div className="playlist-card__item">
                <span>Owner: </span>
                {props.songList.ownerId}
            </div>

            <div className="playlist-card__item">
                {props.songList.isPrivate && <span>Private</span>}
                {!props.songList.isPrivate && <span>Public</span>}
            </div>

            <div className="playlist-card__item playlist-control">
                <Link className="details-link" to={`/songslists/${props.songList.id}`}>
                    Show Details</Link>
                {(loggedInUserId === props.songList.ownerId) &&
                <div>
                    <button className="basic-btn edit">Edit</button>
                    <button className="basic-btn delete" onClick={() => props.onDelete(props.songList.id)}>
                        Delete
                    </button>
                </div>
                }
            </div>

        </div>
    )
}