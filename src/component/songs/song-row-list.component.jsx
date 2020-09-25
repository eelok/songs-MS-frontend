import React from "react";
import {SongRow} from "./song-row.component";

export const SongRowList = ({songs, onEdit, onDelete}) => (
    <>
        {songs.map( song =>
            <SongRow
                key={song.id}
                song={song}
                onEdit={(songId) => onEdit(songId)}
                onDelete={(songId) => onDelete(songId)}
            />
        )}
    </>
)