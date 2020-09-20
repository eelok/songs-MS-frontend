import React from "react";
import {TextInput} from "../TextInput";
import {Radio} from "./Radio";
import {DropdownSongsSelector} from "./DropdownSongsSelector";
//todo delete
export const FormAddPlayList = (props) => {
    return(
        <form onSubmit={props.submitForm} className="form">
            <h1>Your New Playlist</h1>
            <TextInput label={"Name:"} name={"name"} />
            <TextInput label={"Link to image:"} name={"imgUrl"} />
            <Radio isPrivate={true} />
            <DropdownSongsSelector
                listOfSongs={props.listOfSongs}
                onSongAdded={(song) => {
                    let addedSongs = props.addedSongs;
                    addedSongs.push(song);
                    this.setState({
                        ...this.state,
                        addedSongs: addedSongs
                    });
                    //удалить песню, которая была добавлена в addedSongs из listOfSongs
                    //с помощью  фильтр
                    this.setState({
                        ...this.state,
                        listOfSongs: this.state.listOfSongs.filter(s => s.id !== song.id)
                    })
                }}
            />
            <ul className="form-control added-content">
                <span>Selected songs:</span>
                {props.addedSongs.map(song =>
                    <li key={song.id}>{song.title} {song.artist} {song.label} {song.released}</li>
                )}
            </ul>
            <div className="form-control button-item">
                <button className="save-btn" type="submit">Save</button>
            </div>
        </form>
    )
}