import React from "react";

export const SongRow = (props) => (

    <div className="song-row">
        <div className="song-details">
            <img src={props.song.imageUrl} alt="song cover" className="song-details__item song-img"/>
            <div className="song-details__item song-title">
                {props.song.title}
            </div>
            <div className="song-details__item song-artist">
                {props.song.artist}
            </div>
            <div className="song-details__item song-label">
                {props.song.label}
            </div>
            <div className="song-details__item song-released">
                {props.song.released}
            </div>
        </div>
        <div className="song-control">
            <button className="basic-btn edit"
                    onClick={() => props.onEdit(props.song.id)}>Edit
            </button>
            <button className="basic-btn delete"
                    onClick={() => props.onDelete(props.song.id)}>Delete
            </button>
        </div>
    </div>

)