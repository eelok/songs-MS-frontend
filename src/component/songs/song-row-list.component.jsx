import React from "react";
import {SongRow} from "./song-row.component";

export const SongRowList = (props) => (
    <>
        {props.songs.map(song =>
            <SongRow
                key={song.id}
                song={song}
                onEdit={(songId) => props.onEdit(songId)}
                onDelete={(songId) => props.onDelete(songId)}
            />
        )}
    </>
)