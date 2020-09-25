import React from "react";
import {Link} from 'react-router-dom';
import StorageSessionService from "../../service/StorageSessionService";

import "../../css/allSongList-style.css"
import "../../css/buttons.css"

export const    PlaylistCard = ({songList, onDelete}) => {
    let loggedInUserId = StorageSessionService.getUserId();

    return (
        <div className="playlist-card">
            <img src={songList.imgUrl} alt="cool cover" className="playlist-card__item card-image"/>
            <div className="playlist-card__item">
                <span>Name: </span>
                {songList.name}
            </div>

            <div className="playlist-card__item">
                <span>Owner: </span>
                {songList.ownerId}
            </div>

            <div className="playlist-card__item">
                {songList.isPrivate && <span>Private</span>}
                {!songList.isPrivate && <span>Public</span>}
            </div>

            <div className="playlist-card__item playlist-control">
                <Link className="details-link" to={`/songslists/${songList.id}`}>
                    Show Details</Link>
                {(loggedInUserId === songList.ownerId) &&
                <div>
                    <button className="basic-btn edit">Edit</button>
                    <button className="basic-btn delete" onClick={() => onDelete(songList.id)}>
                        Delete
                    </button>
                </div>
                }
            </div>

        </div>
    )
}