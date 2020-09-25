import React from "react";
import {TextInput} from "../TextInput";

export const SongForm = ({title, artist, label, released, imageUrl, onChangeImageUrl, onFormSubmit}) => (

    <form onSubmit={onFormSubmit} className="single-song-box">
        <TextInput type='text' label={"Title:"} name={"title"} value={title} required/>
        <TextInput type='text' label={"Artist:"} name={"artist"} value={artist} required/>
        <TextInput type='text' label={"Label:"} name={"label"} value={label} required/>
        <TextInput type="number" label={"Released:"} name={"released"} value={released} required/>
        <TextInput
            type="text"
            label={"Link to Image:"}
            name={"imageUrl"}
            value={imageUrl}
            required
            onChangeImageUrl={onChangeImageUrl}
        />

        <div className="form-control">
            <img src={imageUrl} alt="cover"/>
        </div>
        <div className="single-song-item">
            <button className="save-btn" type="submit">Save</button>
        </div>
    </form>
)