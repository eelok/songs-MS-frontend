import React from "react";
import {PlaylistCard} from "./playlist-card.component";


export const PlayListCardList = (props) => (
    <div className="playlist-line">
        {props.songLists.map(songList =>
            <PlaylistCard
                key={songList.id}
                songList={songList}
                onDelete={(songListId) => props.onDelete(songListId)}
            />
        )}
    </div>

)