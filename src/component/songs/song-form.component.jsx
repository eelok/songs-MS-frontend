import React from "react";
import {TextInput} from "../TextInput";

export const SongForm = (props) => (
    <form  onSubmit={props.onFormSubmit} className="single-song-box">
        <TextInput label={"Title:"} name={"title"} value={props.title} required/>
        <TextInput label={"Artist:"} name={"artist"} value={props.artist} required/>
        <TextInput label={"Label:"} name={"label"} value={props.label} required/>
        <TextInput label={"Released:"} name={"released"} value={props.released} required/>
        <TextInput label={"Link to Image:"} name={"imageUrl"} value={props.imageUrl} required/>
        <div className="single-song-item">
            <button className="save-btn" type="submit">Save</button>
        </div>
    </form>
)