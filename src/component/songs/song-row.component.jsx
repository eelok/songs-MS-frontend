import React from "react";

export const SongRow = ({song, onEdit, onDelete}) => {
    const {id, imageUrl, title, artist, label, released} = song;

    return (
        <div className="song-row">
            <div className="song-details">
                <img src={imageUrl} alt="song cover" className="song-details__item song-img"/>
                <div className="song-details__item song-title">
                    {title}
                </div>
                <div className="song-details__item song-artist">
                    {artist}
                </div>
                <div className="song-details__item song-label">
                    {label}
                </div>
                <div className="song-details__item song-released">
                    {released}
                </div>
            </div>
            <div className="song-control">
                <button className="basic-btn edit"
                        onClick={() => onEdit(id)}>Edit
                </button>
                <button className="basic-btn delete"
                        onClick={() => onDelete(id)}>Delete
                </button>
            </div>
        </div>

    )
}