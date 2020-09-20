import React from "react";
import {TextInput} from "../TextInput";

export const SongForm = (props) => (
    <form onSubmit={props.onFormSubmit} className="single-song-box">
        <TextInput label={"Title:"} name={"title"} value={props.title} required/>
        <TextInput label={"Artist:"} name={"artist"} value={props.artist} required/>
        <TextInput label={"Label:"} name={"label"} value={props.label} required/>
         <div className="form-control">
            <label>Released</label>
            <input
                type="number"
                name={"released"}
                defaultValue={props.released}
                required
            />
        </div>
        <div className="form-control">
            <label>Link to Image: </label>
            <input
                type="text"
                name={"imageUrl"}
                value={props.imageUrl}
                required
                onChange={props.onChangeImageUrl}
            />
        </div>
        <div className="form-control">
            <img src={props.imageUrl} alt="cover"/>
        </div>
        <div className="single-song-item">
            <button className="save-btn" type="submit">Save</button>
        </div>
    </form>
)