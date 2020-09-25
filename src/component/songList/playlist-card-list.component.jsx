import React from "react";
import {PlaylistCard} from "./playlist-card.component";


export const PlayListCardList = ({songLists, onDelete}) => (
    <div className="playlist-line">
        {songLists.map( songList =>
            <PlaylistCard
                key={songList.id}
                songList={songList}
                onDelete={(songListId) => onDelete(songListId)}
            />
        )}
    </div>

)